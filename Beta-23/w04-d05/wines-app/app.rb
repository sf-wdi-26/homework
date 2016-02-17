class WinesApp < Sinatra::Base
  get "/" do
    "HAPPY VALENTINE DAY!"  
  end

get "/wines" do
  @wines = Wine.all
  erb :"index"
  end

  get "/wines/views" do
      erb :new
  end

post "/wines" do
  @wine = Wine.create(params[:wine])
  @wine.save
  redirect "/"
  end

get "/wines/:id" do
     @wines = Wine.all  
     @wine = Wine.find(params[:id])
     @wine.name
  end

delete "/wines/:id" do
  @wine = Wine.find(params[:id])
  @wine.destroy
  redirect("/wines")
  end
end
