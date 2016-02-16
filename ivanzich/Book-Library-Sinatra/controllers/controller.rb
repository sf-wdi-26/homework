class Library < Sinatra::Base
  # index
  get "/books" do
    @books = Book.all
    erb(:"books/index")
  end

 

  # create
  post "/books" do
    @book = Book.new(params[:book])
    if @book.save
      redirect("/books/#{@book.id}")
    else
      erb(:"books/new")
    end
  end

  # show
  get "/books/:id" do
    @book = Book.find(params[:id])
    erb(:"books/show")
  end

 

  # update
  post "/books/:id/update" do
    @book = Book.find(params[:id])
    if @book.update(params[:book])
      redirect("/books")
    else
      erb(:"books/new")
    end
  end

  # delete
  post "/books/:id/delete" do
    @book = Book.find(params[:id])
    if @book.destroy
      redirect("/books")
    else
      redirect("/books/#{@book.id}")
    end
  end

end