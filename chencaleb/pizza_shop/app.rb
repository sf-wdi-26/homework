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

end
