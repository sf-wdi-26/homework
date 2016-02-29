module SessionsHelper

  def login
    #sets session id to user id
    session[:user_id] = user.id
    #sets global variable current_user to user
    @current_user = user
  end

  def current_user
    # set default value of variabke to the instance
    # of the current user
    @current_user ||= User.find(session[:user_id])
  end

  def logged_in?
    # if there's no current user, redirects to sign in
    if current_user == nil
      redirect_to "/sign_in"
    end
  end

  def logout
    #WHAT IS THIS DOUBLE ASSIGNMENT?!
    @current_user = session[:user_id] = nil
  end


end
