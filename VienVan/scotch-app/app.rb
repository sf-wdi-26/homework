class BooksApp < Sinatra::Base

  get '/' do
    redirect "/books"
  end

  get '/books' do
    @books = Book.all
    erb :index
  end
  # new
  get '/books/new' do
    @book = Book.new
    erb :new
  end

  get '/books/:id' do
     @book = Book.find(params[:id])
     erb :show
  end


  post '/books' do
    @book = Book.new(params[:title])
    if @book.save
      redirect("/books/#{@book.id}")
    else
      erb(:"/new")
    end
  end

  delete "/books/:id/delete" do
    @book = Book.find(params[:id])
    if @book.destroy
      redirect("/books")
    else
      redirect("/books/#{@book.id}")
    end
  end
end
