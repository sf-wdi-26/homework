class CreaturesController < ApplicationController
# show all creatures
    def index
        # get all creatures from db and save to instance variable
        @creatures = Creature.all  
        # render index view file (it will have access to instance variables)
        render :index
    end
end


