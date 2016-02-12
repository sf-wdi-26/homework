class Tunr < Sinatra::Base

  # General route actions
  get '/' do
    erb :home
  end

  get '/about' do
    erb :about
  end

  # RESTful Artist Controller Actions 
  #Represental State Transfer
  # index
  get '/artists' do
    @artists = Artist.all # .all matches index -- index will match to the restful route
    erb(:"artists/index")
  end

  # new --- this is optional (user experience the page where the new artist name in input)
  get '/artists/new' do
    @artist = Artist.new #to create an instance variable 
    erb(:"artists/new")
  end

  # create -- adding a new artist
  post '/artists' do #post is data
    @artist = Artist.new(params[:artist])
    if @artist.save #if the artist was saved then do the next thing
      redirect("/artists/#{@artist.id}")
    else
      erb(:"artists/new")
    end
  end

  # show
  get '/artists/:id' do # (:) - is how u denote a variable
    @artist = Artist.find(params[:id])
    erb(:"artists/show")
  end

  # edit
  get '/artists/:id/edit' do
    @artist = Artist.find(params[:id])
    erb(:"artists/edit")
  end

  # update
  put '/artists/:id' do
    @artist = Artist.find(params[:id])
    if @artist.update_attributes(params[:artist])
      redirect("/artists/#{artist.id}")
    else
      erb(:"artists/edit")
    end
  end

  # delete
  delete '/artists/:id' do
    @artist = Artist.find(params[:id])
    if @artist.destroy
      redirect('/artists')
    else
      redirect("/artists/#{@artist.id}") #this is an option to redirect 
    end
  end

end
