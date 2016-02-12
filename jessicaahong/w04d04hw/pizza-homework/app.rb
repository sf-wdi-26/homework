class PizzaShop < Sinatra::Base
	get "/" do 
		@pizzas = Pizza.all
		@pizza = @pizzas[params[:id].to_i - 1]
		erb :index
	end
end
