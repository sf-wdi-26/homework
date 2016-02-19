class CreaturesController < ApplicationController
	# show all creatures
	def index
		# get all creatures from db and save to instance variable
		@creatures = Creature.all
		# render index view file (it will have access to instance variables)
		render :index
	end


	def create
		creature_params = params.require(:creature).permit(:name, :description)
		creature = Creature.new(creature_params)
		if creature.save
			redirect_to creatures_path
		end
	end

	def new
		@creature = Creature.new
		render :new
	end

	def show
		id = params[:id]
		@creature = Creature.find(id)
		render :show
	end

	def create 
		creature_params = params.require(:creature).permit(:name, :description)
		creature = Creature.new(creature_params)
		if creature.save
			redirect_to creature
		end
	end
end
