class Dreamix < Sinatra::Base

  # create views for each GET route

  get "/" do
    erb "<a href='/stream'>Stream</a>"
  end

  # GET "/stream" - Gets all the stream we have
  get "/stream" do
    # some code here
    erb "Dreamix Stream"
  end

  # POST "/stream" - Add a new song to the list
  post "/stream" do
    # some code here

    erb :update
  end

  # GET "/stream/3" - Just get the information associated with one specific song (that already exists; song id = 3)
  get "/stream/:id" do
    erb params[:id]
  end

  # # PUT "/stream/3" - Updates a specific song (book id = 3)
  # put "/stream/:id" do
  #   # some code here
  # end

  # # PATCH "/stream/3" - Partially updates a specific book
  # patch "/stream/:id" do
  #   # some code here
  # end

  # DELETE "/stream/3" - Deletes a specific song (song id = 3)
  delete "/stream/:id" do
    # some code here
  end
end
