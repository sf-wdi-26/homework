class Dreamix < Sinatra::Base
  get '/' do
    erb :index
  end

  get '/song' do
    erb :song
  end

  post '/song/new' do
    erb :new
  end
end
