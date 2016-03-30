class Tunr < Sinatra::Base

  # General route actions
  get '/' do
    erb :home
  end

  get '/about' do
    erb :about
  end

  get '/views/managers' do
    erb :manager
  end

  get '/views/artists' do
    erb :artists
  end

  get '/foofoofoo' do
    @song = Song.new(:title=>"daniel", :duration=>"forever")
    if @song.save
      erb (:"songs/show")
    end
  end

end

