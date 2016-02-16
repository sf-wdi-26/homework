class ScotchApp < Sinatra::Base
  
  #home
  get "/" do
    @scotches = Scotch.all
    erb :home
  end

  #scotch index
  get "/scotches" do
    @scotches = Scotch.all
    erb :index
  end

  #new scotch
  get "/scotches/new" do
    @scotch = Scotch.new
    erb :new
  end

  #create scotch
  post "/scotches" do
    @scotch = Scotch.new(params[:scotch])
    if @scotch.save
      redirect("/scotches")
    else
      erb :new
    end
  end

  #edit 
  get "/scotches/:id/edit" do
    @scotch = Scotch.find(params[:id])
    erb :edit
  end

  #update
  post "/scotches/:id" do
    @scotch = Scotch.find(params[:id])
    if @scotch.update_attributes(params[:scotch])
      redirect("/scotches")
    else
      erb :edit
    end
  end

  #delete
  post "/scotches/:id/delete" do
    @scotch = Scotch.find(params[:id])
    if @scotch.destroy
      redirect("/scotches")
    else
      redirect("/scotches/#{@scotch.id}")
    end
  end  

  #show 
  get "/scotches/:id" do
    @scotch = Scotch.find(params[:id])
    erb :show
  end


end