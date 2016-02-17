class SongsApp < Sinatra::Base 
  get '/' do 
    @songs = Song.all 
    erb :index
  end

  get '/songs/new' do 
    erb :new
  end

  get '/songs/:id' do
    @song = Song.find(params[:id])
    erb :show
  end

  post '/songs' do 
    @song = Song.create(params[:song])
    redirect '/'
  end

  post '/songs/:id' do 
    @song = Song.find(params[:id])
    @song.destroy!
    redirect'/'
  end


end