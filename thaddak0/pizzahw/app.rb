class PizzaShop < Sinatra::Base


get "/pizza" do
	@pizza = Pizza.all
	erb :"index"	
end

post "/pizza" do
	params = {name: "Red Anchovy Delight", sauce: 'red', cheese:true, mushrooms:true, extra_toppings: "anchoves"}
	@pizza = Pizza.new(params)
	@pizza.save
	erb :"index"
end

get "/pizza" do
	@pizza = Pizza.find(1);
	erb :"show"
end 

get ".pizza/:id/edit" do
	@pizza = Pizza.find(1)
	@Pizza.update_attribute(:mushrooms, "false")
end

delete '/pizza/:id/delete' do
	@pizza = Pizza.find(1)
	@pizza.destroy
end

end

