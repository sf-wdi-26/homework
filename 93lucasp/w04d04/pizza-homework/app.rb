class PizzaShop < Sinatra::Base

	get "/" do
	erb :home
	end

	get "/pizzas" do
		@pizzas= Pizza.all 
		erb :index

	end

end
