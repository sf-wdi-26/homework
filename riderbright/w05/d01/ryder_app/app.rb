class FoodsApp < Sinatra::Base
  
  get "/" do 
    erb :"root" 
  end    
  
  get '/foods' do
    @foods = Food.all
    erb :"index"
  end
  
  get '/foods/new' do 
        erb :new
    end

  post '/foods' do
      p params  
      @food = Food.create(params[:id])
      @food.save
      redirect "/"
  end

  get '/foods/:id' do
      @food = Food.all
      @food = Food.find(params[:id])
      @food.title  
  end
end
post '/foods/:id' do
    @food = Food.find(params[:id])
    @food.create
    redirect("/foods/")
end
