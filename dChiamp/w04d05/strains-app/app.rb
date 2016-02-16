class StrainsApp < Sinatra::Base
  # root
  get '/' do
      # "Hello, World!"
      erb :"home"
  end

  # index
  get '/strains' do
    @strains = Strain.all
    erb :"index"
  end

  # new
  get '/strains/new' do
    erb(:"strains/new")
  end

  # create
  post '/strains' do
    @strain = Strain.create(params[:strain])
    if @strain.save
    redirect ("/strains")
    else
      erb(:"strains/new")
    end
  end

    # show
  get '/strains/:id' do
    @strain = Strain.find(params[:id])
    erb(:"strains/show")
  end

  # edit
  get '/strains/:id/edit' do
    @strain = Strain.find(params[:id])
    erb(:"strains/edit")
  end

# destroy
  delete '/strains/:id' do
    @strain = Strain.find(params[:id])
    @strain.destroy
    redirect("/strains")
  end

end