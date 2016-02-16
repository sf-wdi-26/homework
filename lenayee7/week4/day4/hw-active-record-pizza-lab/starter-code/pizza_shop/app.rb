class PizzaShop < Sinatra::Base

	get "/" do
		"Hello world"
		erb :index
	end

	get '/pizzas' do
    @pizzas = Pizza.all
    erb(:"pizzas/index")
  end

	#show
	get "/pizzas" do
		@pizzas = Pizza.all
		erb :show
	end

  

	  # show

 end

  # RESTful Artist Controller Actions
  # index

  # # new
  # get '/artists/new' do
  #   @artist = Artist.new
  #   erb(:"artists/new")
  # end

  # # create
  # post '/artists' do
  #   @artist = Artist.new(params[:artist])
  #   if @artist.save
  #     redirect("/artists/#{@artist.id}")
  #   else
  #     erb(:"artists/new")
  #   end
  # end



  # edit
  # get '/artists/:id/edit' do
  #   @artist = Artist.find(params[:id])
  #   erb(:"artists/edit")
  # end

  # # update
  # put '/artists/:id' do
  #   @artist = Artist.find(params[:id])
  #   if @artist.update_attributes(params[:artist])
  #     redirect("/artists/#{artist.id}")
  #   else
  #     erb(:"artists/edit")
  #   end
  # end

  # # delete
  # delete '/artists/:id/delete' do
  #   @artist = Artist.find(params[:id])
  #   if @artist.destroy
  #     redirect('/artists')
  #   else
  #     redirect("/artists/#{@artist.id}")
  #   end
  # end

