class UsersController < ApplicationController
  
  def index
    @users = User.all
    render :index
  end

  def new
  end

  def create
    user_params = params.require(:user).permit(:first_name, :last_name, :email, :password)
    @user = User.create(user_params[:id])
    login(@user)
    redirect_to "/users"
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

end
