class LibrariesController < ApplicationController


	#index of all the libraries
	def index
		@libraries = Library.all
		render :index
	end

	#form for library to create new library
	def new
		@library = Library.new
		render :new
	end

	#creates new library and saves to libraries db
	def create
		@library = Library.create(library_params)

		redirect_to "/libraries"
	end

	#show info for specific library
	def show
		@library = Library.find(params[:id])
		render :show
	end

	#form to edit info for specific library
	def edit
		@library = Library.find(params[:id])
		render :edit
	end

	#updates info for specific library and saves to libraries db
	def update
		@library = Library.find(params[:id])
		library_params = params.require(:library).permit(:name, :floor_count, :floor_area)
		if Library.update(@library.id, library_params)
			flash[:success] = "Library updated"
			redirect_to "/libraries/#{@library.id}"
		else 
			render :edit
		end
	end

	private

	def library_params
		params.require(:library).permit(:name, :floor_count, :floor_area)
	end
end
