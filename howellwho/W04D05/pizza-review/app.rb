class PizzasApp < Sinatra::Base
#root
    get '/' do
        @pizzas = Pizza.all
        erb :"/pizzas/index"
    end
# about page
    get '/about' do
      erb :about
    end
#index
    get '/pizzas' do
      @pizzas = Pizza.all
      erb :"/pizzas/index"
    end
#new
    get '/pizzas/new' do
      erb :"/pizzas/new"
    end
#create
    post '/pizzas' do
       # p params
       @pizza = Pizza.create(params[:pizza])
       @pizza.save
       redirect "/"
   end
#show
    get '/pizzas/:id' do
  #got this to work but can't show all
      # @pizza = Pizza.all
      # @pizza = Pizza.find(params[:id])
      # @pizza.restaurant
      @pizza = Pizza.find(params[:id])
    erb :"/pizzas/show"
end

#edit
get '/pizzas/:id/edit' do
  @pizza = Pizza.find(params[:id])
  erb :"pizzas/edit"
end

#update
put '/pizzas/:id' do
    @pizza = Pizza.find(params[:id])
    if @pizza.update_attributes(params[:pizza])
      redirect("/pizzas")
    else
      erb :"/pizzas/new"
    end
  end

#delete
    delete '/pizzas/:id' do
      @pizza = Pizza.find(params[:id])
      @pizza.destroy
      redirect ("/pizzas")

  end
end
