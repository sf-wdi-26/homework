class ScotchsApp < Sinatra::Base
  get '/' do
        "Hello, World!"
    end

    get '/scotch' do 
      @scotch = Scotch.all
      erb ":index"
    end

end


