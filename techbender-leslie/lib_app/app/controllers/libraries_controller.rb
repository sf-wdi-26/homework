class LibrariesController < ApplicationController
  # before_filter :logged_in?, only: [:index, :show]
  

  def index
    @libraries = Library.all
    render :index
  end

  def new
    @library = Library.new
    render :new
  end

  def create
    @library = Library.create(library_params)
    # if @library.save
    #   redirect_to libraries_path
    # else
    #   render :new
    redirect_to "/libraries"
    # end
  end

  # def show
  #   @library = Library.find(params[:id])
  #   render :show
  # end

  # def edit
  #   @library = Library.find(params[:id])
  #   render :edit
  # end

  # def update
  #   @library = Library.find(params[:id])
  #   if @library.update(library_params)
  #     redirect_to @library
  #   else
  #     render :edit
  #   end
  # end

  # def destroy
  #   @location = Library.find(params[:id])
  #   @location.destroy
  #   redirect_to libraries_path
  # end

  private

  def library_params
   params.require(:library).permit(:name, :floor_count, :floor_area)
  end


end
