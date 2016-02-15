class Dreamix < Sinatra::Base
  get '/' do
    erb :index
  end

  get '/song' do
    @songs = Song.all
    erb :song
  end

  get '/new' do
    erb :new
  end

  post '/new/:id' do
    # @songs =
  end
end


# figure out how to get values from forms
# how to crud the database with values from forms
# understanding styling in bootstrap better, or understanding sass.
