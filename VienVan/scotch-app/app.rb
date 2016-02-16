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
    @book = Book.create(params[:book])
      redirect("/books/#{@book.id}")
  end

  delete '/books/:id' do
    @book = Book.find(params[:id])
    @book.destroy
    redirect("/books")
  end
end
