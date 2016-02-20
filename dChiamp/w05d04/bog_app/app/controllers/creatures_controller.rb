class CreaturesController < ApplicationController
  def index
    @creatures = Creature.all
    # render: index
  end

  def new
    # don't have to def a creatures instance var here?
    @creature = Creature.new #this makes more sense to me
    render :new
  end

  def create
    @creature = Creature.create(creature_params)
    # if @creature.save
      # redirect_to '/creatures'
      redirect_to creatures_path
    # end

  end

  def show
    id = params[:id]
    @creature = Creature.find(id)
    # render: show
  end

  def edit
    # id = params[:id]
    @creature = Creature.find(params[:id])
    # render :edit
  end

  def update
    creature_id = params[:id]
    creature = Creature.find(creature_id)
    creature.update_attributes(creature_params)
    redirect_to creature
  end

  def destroy
    Creature.destroy(params[:id])
    redirect_to creatures_path
  end

  private
  def creature_params
    params.require(:creature).permit(:name, :description, :age)
  end
  
end
