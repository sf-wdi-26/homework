class PokemonApp < Sinatra::Base
	#root
	get '/' do
		redirect('/pokemons')		
	end

	#pokemon index
	get '/pokemons' do
		@pokemons = Pokemon.all
		erb :"pokemons/index"
	end

	#new
	get '/pokemons/new' do
		erb :"pokemons/new"
	end

	#create pokemon
	post '/pokemons' do
		#p params
		@pokemon = Pokemon.create(params[:pokemon])
		#@pokemon.save
		redirect "/"
	end

	#show
	get '/pokemons/:id' do
		@pokemon = Pokemon.find(params[:id])
		erb(:"pokemons/show")
	end

	#destroy
	delete '/pokemons/:id' do
		@pokemon = Pokemon.find(params[:id])
		@pokemon.destroy
		redirect("/pokemons")
	end

	#edit
	get '/pokemons/:id/edit' do
		@pokemon = Pokemon.find(params[:id])
		erb :"pokemons/edit"
	end

	#update
	put '/pokemons/:id' do
		@pokemon = Pokemon.find(params[:id])
		@pokemon.update_attributes(params[:pokemon])
		redirect("/pokemons")
	end

end