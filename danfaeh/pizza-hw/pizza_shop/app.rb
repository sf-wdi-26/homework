class PizzaShop < Sinatra::Base
  
  # home
  get "/" do 
    erb :home
  end

  # index
  get "/pizzas" do
    @pizzas = Pizza.all
    erb :index
  end

  # show
  get "/pizzas/:id" do
    @pizza = Pizza.find(params[:id])
    erb :show
  end

  # # new
  # get "/pizzas/new" do
  #   @pizza = Pizza.new
  #   erb :"pizzas/new"
  # end

  # # create
  # post "/pizzas" do
  #   @pizza = Pizza.new(params[:pizza])
  #   if @pizza.save
  #     redirect :index
  #   else
  #     erb :index
  # end


  # # update
  # puts "/" do
  # end


  # # delete
  # get "/"
  # end

end
