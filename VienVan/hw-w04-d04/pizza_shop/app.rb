class PizzaShop < Sinatra::Base

  get '/' do
    erb :'index'
  end

  get '/pizzas' do
    @pizzas = Artist.all
    erb(:"pizzas/index")

  end
end
