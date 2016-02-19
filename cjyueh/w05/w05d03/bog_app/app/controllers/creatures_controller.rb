class CreaturesController < ApplicationController
	#show all creatures
	def index
		#get all creatures from db and save to instance variable
		@creatures = Creature.all
		#render index view file (will have access to instance variables)
		render :index
	end

	#show new creature form
	def new
		#new instance of Creature to view
		@creature = Creature.new
		render :new
	end

	#create new creature in db
	def create
		#validate params and save as variable
		creature_params = params.require(:creature).permit(:name, :description)
		#create new creature w above params
		creature = Creature.new(creature_params)
		#check that it saved
		if creature.save
			#if saved, redirect to route that shows all creatures
			redirect_to creature #same as "/creatures/#{creature.id}"
		end
	end

	#show a single creature
	def show
		#get id param from url
		id = params[:id]
		#find creature with that id and save to instance variable of Creature
		@creature = Creature.find(id)
		#render the show page with access to @creature variable
		render :show
	end
end
