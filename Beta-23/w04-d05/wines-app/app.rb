class WinesApp < Sinatra::Base
  get "/" do
    "HAPPY VALENTINE DAY!"  
  end

get "/wines" do
  @wines = Wine.all
  erb :"index"
  end
get "/wines/:id" do
     @wines = Wines.all  
     @wines = Wines.find(params[:id])
     @wine.names
  end 
  get "/wines/new" do
      erb :new
  end
post "/wines" do
  @wine = Wine.create(params[:wine])
  @wine.save
  redirect "/"
  end

end
