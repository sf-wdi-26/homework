class PizzasApp < Sinatra::Base
	get "/" do 
    @pizzas = Pizza.all
		erb :index
	end

	get "/pizzas" do 
		@pizzas = Pizza.all
		erb :index
	end

	# new
	get '/pizzas/new' do
    @pizza = Pizza.new
    erb(:new)
  end

  # create
  post '/pizzas' do
    @pizza = Pizza.new(params[:pizza])
    if @pizza.save
      redirect("/pizzas")
    else
      erb(:new)
    end
  	end

  	# show
	get '/pizzas/:id' do
		@pizza = Pizza.find(params[:id])
		erb(:show)
	end


  # edit
  get '/pizzas/:id/edit' do
    @pizza = Pizza.find(params[:id])
    erb(:edit)
  end

  # update
  post '/pizzas/:id' do
    @pizza = Pizza.find(params[:id])
    if @pizza.update_attributes(params[:pizza])
      redirect("/pizzas")
    else
      erb(:"pizzas/<%= pizza.id %>/edit")
    end
  end

  # delete
  post '/pizzas/:id/delete' do
    @pizza = Pizza.find(params[:id])
    if @pizza.destroy
      redirect('/pizzas')
    else
      redirect("/pizzas/#{@pizza.id}")
    end 
  end
end