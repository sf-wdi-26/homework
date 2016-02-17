class PizzaShop < Sinatra::Base
	#general routes
	#home
	get '/' do
    erb :home
 end

# RESTful pizza Controller Actions
#index
  get '/pizzas' do
    @pizzas = Pizza.all
    erb(:"pizzas/index")
  end

  # create
  post "/pizzas" do
    #these will eventually be real params passed from the client
    params = {name: "Red Anchove Delight", sauce: 'red', cheese:true, mushrooms:true, extra_toppings: "anchoves"}
    @pizza = Pizza.new(params)
    @pizza.save
   erb(:"pizzas/new")
  end

  # show
  get '/pizzas/:id' do
    @pizza = Pizza.find(params[:id])
    # erb(:"pizzas/show")
  end

  # update
  put '/pizzas/:id' do
    @pizza = Pizza.find(params[:id])
    erb(:"pizzas/new")
  end

  # edit
  patch '/pizzas/:id' do
    @pizza = Pizza.find(params[:id])
    @pizza.update_attributes(params)
    # erb(:"pizzas/edit")
  end

  # delete
  delete '/pizzas/:id' do
    @pizza = Pizza.find(params[:id])
    @pizza.destroy
    # erb(:"pizzas/delete")
  end

  # new
  get '/pizzas/new' do
    @pizza = Pizza.new
    # erb(:"pizzas/new")
  end
end