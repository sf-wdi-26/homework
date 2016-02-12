class PizzaShop < Sinatra::Base

  # # General route actions
  # get '/' do
  #   erb :home
  # end
  #
  # get '/about' do
  #   erb :about
  # end


  # index
  get '/pizzas' do
    @pizza = Pizza.all
    erb :index
  end

  # show
  get '/pizzas/:id' do
    @pizza = Pizza.find(params[:id])
    erb(:"pizza/show")
  end
  # # new
  # get '/pizzas/new' do
  #   @pizza = Pizza.new
  #   erb :new
  # end

  # create
  post '/pizza' do
    @pizza = Pizza.new(params[:pizza])
    if @pizza.save
      redirect("/pizzas/#{@pizza.id}")
    else
      erb :new
    end
  end

  # # edit
  # get '/pizzas/:id/edit' do
  #   @pizza = Pizza.find(params[:id])
  #   erb(:"pizza/edit")
  # end

  # update
  put '/pizzas/:id' do
    @pizza = Pizza.find(params[:id])
    if @pizza.update_attributes(params[:pizza])
      redirect("/pizzas/#{pizza.id}")
    else
      erb(:"pizza/edit")
    end
  end

  # delete
  delete '/pizzas/:id/delete' do
    @pizza = Pizza.find(params[:id])
    if @pizza.destroy
      redirect('/pizzas')
    else
      redirect("/pizzas/#{@pizza.id}")
    end
  end
end
