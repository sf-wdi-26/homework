class LibraryUsersController < ApplicationController
	#index of all users at a specific library
	def index
		@user = User.find(params[:user_id])
		@libraries = @user.libraries
		current_user #sets current_user

		render :index
	end

	#create user at specific library
	def create
		@user = current_user
		@library = Library.find(params[:lirbary_id])
		@user.libraries.push(@library)

		redirect_to user_libraries(@user)
	end
end
