class UsersController < ApplicationController

  # grab the users
  def index
    @users = User.all
    render :index
  
def new
    # we need to make
    # a new user
    # to pass to the 
    # form later
    @user = User.new
    render :new

def create
    user_params = params.require(:user).permit(:first_name, :last_name, :email, :password)
    @user = User.create(user_params)

    redirect_to "/users"

 end 

end 

end


end

