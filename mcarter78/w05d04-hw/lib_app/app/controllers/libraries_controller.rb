class LibrariesController < ApplicationController
  before_action :logged_in?, except: [:index]

  def index
    @libraries = Library.all
    current_user
    render :index
  end

  def new
    @library = Library.new
    render :new
  end

  def create
    @library = Library.create(library_params)
    redirect_to "/libraries"
  end

  private

  def library_params
    params.require(:library).permit(:name, :floor_count, :floor_area)
  end
end
