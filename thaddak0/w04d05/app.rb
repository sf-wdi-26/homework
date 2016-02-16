class CastlesApp < Sinatra::Base

  #index
  get '/' do
    @castles = Castle.all
    erb :index
  end
#new
  get '/castles/new' do
    erb :new
  end

#create
  post '/castles' do
    @castle = Castle.create(params[:castle])
    @castle.save
    redirect("/castles/#{@castle.id}")
  end

  #show
  get '/castles/:id' do
    @castle = Castle.find(params[:id])
    erb :show
  end

  #edit
  get '/castles/:id/edit' do
    @castle = Castle.find(params[:id])
    erb :edit
  end

  #update
  put '/castles/:id' do
    @castle = Castle.find(params[:id])
    if @castle.update_attributes(params[:castle])
      redirect("/castles/#{@castle.id}")
    else
      erb :edit
  end
end

#delete

delete '/castles/:id' do
    @castle = Castle.find(params[:id])
    if @castle.destroy
      redirect '/'
    else
      redirect("/castles/#{@castle.id}")
    end
  end



end
