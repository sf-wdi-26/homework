class PizzaShop < Sinatra::Base

  get "/pizzas" do
    @pizzas = Pizza.all
  end

  post "/pizzas" do
    params = {name: "Red Anchove Delight", sauce: 'red', cheese:true, mushrooms:true, extra_toppings: "anchoves"}
    @pizza = Pizza.new(params)
    @pizza.save
  end

  get "/pizzas/:id" do
    @pizza = Pizza.find(params[:id])
  end

  put "/pizzas/:id" do
    params = {name: "White Anchove Delight", sauce: 'white'}
    @pizza = Pizza.find(params[:id])
    @pizza.update_attributes(params)
  end

  patch "/pizzas/:id" do
    params = {name: "White Anchove Delight", sauce: 'white'}
    @pizza = Pizza.find(params[:id])
    @pizza.update_attributes(params)
  end

  delete "/pizzas/:id" do
    @pizza = Pizza.find(params[:id])
    @pizza.destroy
  end

end
