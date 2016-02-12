class PizzaShop < Sinatra::Base

	#index
	get "/" do 
		@pizzas = Pizza.all
		@pizza = @pizzas[params[:id].to_i - 1]
		erb :index
	end

	#show
	get "/pizzas/:id" do
		@pizzas = Pizza.all
		@pizza = @pizzas[params[:id].to_i - 1]
		erb :show
	end

	#create
	post "/pizzas" do
		params = {name: "Red Anchovy Delight", sauce: 'red', cheese:true, mushrooms:true, extra_toppings: "anchoves"}
		erb :pizzas
	end

	#update
	put "/pizzas/:id" do
		@pizza = Pizza.find(params[:id])
		if @pizza.update_attributes(name: "BBQ")
			redirect("pizzas/#{pizza.id}")
		else
			erb :index
		end
	end

	#delete
	delete '/pizzas/:id' do
	    @pizza = Pizza.find(params[:id])
	    if @pizza.destroy
	      redirect('/')
	    else
	      redirect("/pizzas/#{@pizza.id}")
	    end
  	end

end
