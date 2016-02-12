class PizzaShop < Sinatra::Base

  #index
  get "/pizzas" do
    @pizza = Pizza.all
    erb :index
  end

  #show
  get "/pizzas/:id" do
    @pizza = Pizza.find(params[:id])
    erb :show
  end

  #create
  post "/pizzas" do
    @pizza = Pizza.new(params[:pizza])
    if @pizza.save
      redirect("pizzas/#{@pizza.id}")
    end
  end

  #update
  put "/pizzas/:id" do
    @pizza = Pizza.find(params[:id])
    if @pizza.update_attributes(params[:pizza])
      redirect("pizza/#{@pizza.id}")
    end
  end

  #delete
  delete '/pizzas/:id' do
    @pizza = Pizza.find(params[:id])
    if @pizza.destroy
      redirect("/pizzas")
    end
  end

end
