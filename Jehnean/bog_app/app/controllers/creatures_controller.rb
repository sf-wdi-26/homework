class CreaturesController < ApplicationController
	#show all creatures
	def index 
		#get all creatures from db and save to instance variable
		@creatures = Creature.all 
		#render index view file 
		render :index
	end

	# create a new creature in the database
    def create
        # validate params and save them as a variable
        creature_params = params.require(:creature).permit(:name, :description)
        # create a new creature with those params
        creature = Creature.new(creature_params)
        # check that it saved
        if creature.save
            # if saved, redirect to route that shows all creatures
            redirect_to creatures_path
            # ^ same as redirect_to "/creatures"
        end
    end

    def new 
    	@creature = Creature.new
    	render :new
    end

    # show a single creature
    def show 
        id = params[:id]
        @creature = Creature.find(id)
        render :show
    end

end
