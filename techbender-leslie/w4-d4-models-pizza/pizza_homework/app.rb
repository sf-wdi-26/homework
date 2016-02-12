class PizzaShop < Sinatra::Base


  get '/pizzas' do         # .all - show all pizzas
    @pizzas = Pizza.all
    erb(:"pizzas/index")
  end

  get '/pizzas/new' do     # .new - get form for new pizza
    @pizza = Pizza.new
    erb(:"pizzas/new")
  end

  post '/pizzas' do        # .save - post new pizza in db
    params = {name: "The Big Explosion", sauce: "zesty marinara", cheese: true, mushrooms: false, extra_toppings: "anchovies, fresh garlic, red pepper flakes, jalapenos"}
    @pizza =  Pizza.new(params[:pizza])
    if @pizza.save
      redirect("/pizzas/#{@pizza.id}")
    else
      erb(:"pizzas/new")
    end
  end

  get '/pizzas/:id' do     # .find - get one particular pizza
    @pizza = Pizza.find(params[:id])
    erb(:"pizzas/show")
  end

  get '/pizzas/:id/edit' do # .find - get edit form for one pizza
    @pizza = Pizza.find(params[:id])
    erb(:"pizzas/edit")
  end

  put '/pizzas/:id' do      # .update_attributes - save changes to edited one pizza
    params= {name: "The Saradooly", mushrooms: true, extra_toppings: "smoked mozzarella, heirloom tomatoes, baby spinach"}
    @pizza = Pizza.find(params[:id])   
    if @pizza.update_attributes(params[:pizza])
      redirect("/pizzas/#{pizza.id}")
    else
      erb(:"pizzas/edit")
    end
  end

  delete '/pizzas/:id/delete' do    # .destroy - get and delete one pizza
    @pizza = Pizza.find(parms[:id])
    if @pizza.destroy
      redirect('/pizzas')
    else
      redirect('/pizzas/#{@pizza.id}')
    end
  end

end

