class PokemonApp < Sinatra::Base
	#root
	get '/' do
		@pokemons = Pokemon.all
		p @pokemons
		erb :index		
	end

	#pokemon index
	get '/pokemons' do
		@pokemons = Pokemon.all
		erb :index
	end

	#create form
	get '/pokemons/new' do
		erb :"pokemons/new"
	end

	#show form
	# get '/pokemons/id' do
	# 	@pokemon = Pokemon.find(params[:id])
	# 	erb :"pokemons/show"
	# end

	#create pokemon
	post '/pokemons' do
		#p params
		@pokemon = Pokemon.create(params[:pokemon])
		#@pokemon.save
		redirect "/"
	end

	#show?
	get '/pokemons/:id' do
		@pokemons = Pokemon.all
		@pokemon = Pokemon.find(params[:id])
		@pokemon.name
	end

	#destroy
	delete '/pokemons/:id' do
		@pokemon = Pokemon.find(params[:id])
		@pokemon.destroy
		redirect("/pokemons")
	end

end