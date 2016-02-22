class UsersController < ApplicationController
	before_action :logged_in?, only: [:show] #in order to view specific user page, user must be logged in

	#index of all the users
	def index
		@users = User.all
		render :index
	end

	#form for user to create new user
	def new
		@user = User.new
		render :new
	end

	#creates new user and saves to users db
	def create
		@user = User.create(user_params)
		login(@user) #login the user
		redirect_to "/users/#{@user.id}" #show user.id in url
	end

	#show info for specific user
	def show
		@user = User.find(params[:id])
		render :show
	end

	private

	def user_params
		params.require(:user).permit(:first_name, :last_name, :email, :password)
	end
end
