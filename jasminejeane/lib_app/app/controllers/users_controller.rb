class UsersController < ApplicationController
	  before_action :logged_in?, only: [:show]


	def index
		#holding all the values of user in this var
		@users = User.all
		#render means show users  (:index) view page 
		render :index
	end


	def new 

		@user = User.new
		render :new
	end

	def create
		user_params = params.require(:user).permit(:first_name, :last_name, :email, :password)
		@user = User.create(user_params)

		redirect_to "/users"
		#redirect to the user edit view

	end

	def show
		@user = User.find(params[:id])
		render :show
		
	end

	# def edit
	# shows a form that a user can edit their profile with
		# form send a PUT request to user#update
	# end

	# def update
	# update the user data
	# redirect to their profile (show page)
	

	# def create
	# 	user_params = params.require(:user).permit(:first_name, :last_name, :email, :password)
	# 	@user = User.create(user_params)
	# 	login(@user)
	# 	redirect_to "/users/#{@user.id}"
	# end

end





















