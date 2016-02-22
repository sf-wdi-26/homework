class SessionsController < ApplicationController
	#form for user to sign-in and create new session
	def new
		@user = User.new
		render :new
	end

	#create new session for user and saves session
	def create
		user_params = params.require(:user).permit(:email, :password)
		@user = User.confirm(user_params)
		if @user
			login(@user)
			redirect_to "/users/#{@user.id}"
		else
			redirect_to "sign_in"
		end
	end
end
