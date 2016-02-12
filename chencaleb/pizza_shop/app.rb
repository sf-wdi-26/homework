class PizzaShop < Sinatra::Base
	
	#index
	get "/" do 
        @pizzas = Pizza.all
        @pizza = @pizzas[params[:id].to_i]
        erb :index
    end

end
