class RestfulControllerApp < Sinatra::Base
get "/" do 
	erb "This is my home page"
end
get "/about" do
	erb :'about'
end
get "/contact" do
	erb :'contact'
end
get "/products" do
	erb :'products'
end



end
