class CreaturesController < ApplicationController
  def index
    @creatures = Creature.all
    render :index
  end
  def new
    @creature = Creature.new
    render :new
  end
  def create
    creature_params = params.require(:creature).permit(:name, :description)
    creature = Creature.new(creature_params)
    if creature.save
      redirect_to creature
    end
  end
  def show
    @creature = Creature.find(params[:id])
    render :show
  end
  def edit
  end
  def update
    creature = Creature.find(params[:id])
    updated_attributes = params.require(:creature).permit(:name, :description)
    creature.update_attributes(updated_attributes)
    redirect_to creature
  end
  def destroy
    creature = Creature.find(params[:id])
    creature.destroy
    redirect_to creatures_path
  end
end
