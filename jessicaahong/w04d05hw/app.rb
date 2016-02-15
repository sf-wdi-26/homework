class OrderUp < Sinatra::Base
	get '/' do
		@orders = Order.all
		erb :home		
	end

	get '/about' do
		erb :about
	end

	get '/orders' do 
		@orders = Order.all
		# @order = Order.find(params[:id])
		erb(:"orders/index")
	end

#new
	get '/orders/new' do
		erb(:"orders/new")
	end

#create
	post '/orders' do
		@order = Order.new(params[:order])
		if @order.save
			redirect("/orders/#{@order.id}")
		else 
			erb(:"orders/new")
		end
	end

#show
	get '/orders/:id' do
		@order = Order.find(params[:id])
		erb(:"orders/show")
	end

#edit
	get '/orders/:id/edit' do
		@order = Order.find(params[:id])
		erb(:"orders/edit")
	end


#update
	put '/orders/:id' do
		@order = Order.find(params[:id])
		if @order.update_attributes(params[:order])
			erb(:"orders/show")
		else
			erb(:"orders/new")
		end
	end

#destroy
	delete '/orders/:id/delete' do
		@order = Order.find(params[:id])
		@order.destroy
		redirect("/orders")
	end
end