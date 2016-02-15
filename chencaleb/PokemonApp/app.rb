class PokemonApp < Sinatra::Base
	get '/' do
		"Hello, World"		
	end

	get "/pokemons" do
		@pokemons = Pokemon.all
		erb :index
	end
end