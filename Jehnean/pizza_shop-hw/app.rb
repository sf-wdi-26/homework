class PizzaShop < Sinatra::Base

	# CREATE
	# Creates a new pizza and posts it to /pizzas 
	post "/pizzas" do
		params = {
			name: "Red Anchovy Delight", sauce: "red", cheese:true, mushrooms:true, extra_toppings: "anchoves"
			name: "Veggie Deslight", sauce: "red", cheese:true, mushrooms:true, extra_toppings: "bell peppers" 
		}

	# INDEX
	# Gets all the pizzas we have and like index.html, is a list of pizzas
  	get "/pizzas" do
    	@pizzas = Pizza.all
  	end

  	#SHOW
  	# Gets one pizza by exisiting id and shows details
  	get "/pizzas/:id" do 
  		@pizza = Pizza.find(params[:id])
  	end

  	#UPDATE 
  	# Updates a specific pizza by finding in id and update_attributes 
  	get "/pizzas/:id" do 
  		params = {
  			name: "Meat Lovers", mushrooms: false, extra_toppings: "sausage"
  		}
  		@pizza = Pizza.find(params[:id])
  		@pizza.update_attributes(params)
  	end

  	#DELETE 
  	# Finds a pizza by id and then deletes that pizza from the database
  	DELETE "/pizzas/:id" do 
  		@pizza = Pizza.find(params[:id])
  		@pizza.destroy
  	end

end


  