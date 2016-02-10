class RestfulControllerApp < Sinatra::Base

	get '/' do 
		erb :"index"
	end

	get "/movies" do
		@movies = ["Fast and the Furious 7", "Batman", "Inside Out"]
		erb :movies
	end

get "/movies/:id" do
    # params[:id]
    @movies = ["Fast and the Furious 7", "Batman", "Inside Out"]
    p params
    movie = @movies[params[:id].to_i]
    erb :"show"
  end

    #adds a form
   get "/movies/new" do
    erb :"new"
  end

end