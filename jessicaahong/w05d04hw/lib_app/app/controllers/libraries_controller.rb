class LibrariesController < ApplicationController
before_action :logged_in?, only: [:new, :create]
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

	def show
		@library = Library.find(params[:id])
		render :show
	end

	def edit
		@library = Library.find(params[:id])
		render :edit
	end

	def update
		library = Library.find(params[:id])
		library.update_attributes(library_params)
		redirect_to library
	end

	def destroy
		@library = Library.find(params[:id])
		@library.destroy
		redirect_to libraries_path
	end

	private

	def library_params
		params.require(:library).permit(:name, :floor_count, :floor_area)
	end
end
