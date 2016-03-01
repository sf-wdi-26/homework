class LibraryUsersController < ApplicationController
      def index
          @user = User.find(params[:user_id])

          @libaries = Library.all
          current_user
      end

      def create
          @user = current_user
          @library = Library.find(params[:library_id])
          @user.libraries.push(@library)
          redirect_to "/users/#{@user.id}/libraries"
      end
end
