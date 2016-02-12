class PizzaShop < Sinatra::Base
	
	#index
	get "/" do 
        @pizzas = Pizza.all
        @pizza = @pizzas[params[:id].to_i]
        erb :index
    end

    #create
    post "/pizzas" do
    	params = {name: "Anchovy Explosion", sauce: 'red', cheese:true, mushrooms:false, extra_toppings: "anchovies"}
    	@pizza = Pizza.new(params)
    	@pizza.save
  	end

  	#show
  	get "/pizzas/:id" do
  		@pizza = Pizza.find(params[:id])
  	end

  	#update
  	put "/pizzas/:id" do
  		params = {name: "Veggie", sauce: 'red', cheese:true, mushrooms: true}
  		@pizza = Pizza.find(params[:id])
  		@pizza.update_attributes(params)
  	end

  	#destroy
  	delete "/pizzas/:id" do
  		@pizza = Pizza.find(params[:id])
  		@pizza.destroy
  	end
end
