class LibrariesController < ApplicationController
      def index
          @libraries = Library.all
      end

      def new
          @library = Library.new
      end

      def create
          library_params = params.require(:library).permit(:name, :floor_count, :area_count)
          @library = Library.new(library_params)
          if  @library.save
              redirect_to "/libraries"
          end
      end

      def show
          @library = Library.find(params[:id])
      end
end
