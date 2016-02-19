class CreaturesController < ApplicationController
# show all creatures
    def index
        # get all creatures from db and save to instance variable
        @creatures = Creature.all  
        # render index view file (it will have access to instance variables)
        render :index
    def new
    	@creature = Creature.new
        render :new

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


