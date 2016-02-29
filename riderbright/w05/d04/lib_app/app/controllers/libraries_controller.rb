class LibrariesController < ApplicationController

  def index
    @librarys = Library.all
    render: index
  end
    
end
