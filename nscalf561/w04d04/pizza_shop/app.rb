class PizzaShop < Sinatra::Base

	get '/' do
		@pizzas = Pizza.all
		p @pizzas
		erb :"index"
	end

	get '/pizzas' do 
		@pizzas = Pizza.all
		p @pizzas
		erb :"index"
	end

	get '/pizzas/new' do 
		erb :new
	end

	post '/pizzas' do
		@pizza = Pizza.new(params[:pizza])
		@pizza.save
		redirect "/"
	end

	get '/pizzas/:id' do 
		@pizza = Pizza.all
		@pizza = Pizza.find(params[:id])
		@pizza.name
	end

	delete '/pizzas/:id' do
		@pizza = Pizza.find(params[:id])
		@pizza.destroy
		redirect("/pizzas")
	end
end
