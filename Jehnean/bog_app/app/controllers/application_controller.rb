class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # ... keep your other content, and add:
  # show the new creature form
  def new
    render :new   # optional; this is the default behavior
  end
end
