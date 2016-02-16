class ScotchApp < Sinatra::Base

	#index
    get '/' do
        @scotches = Scotch.all
        erb :"/scotches/index"   
    end

    get '/scotches' do
        @scotches = Scotch.all
        erb :"/scotches/index"
    end

    #new
    get '/scotches/new' do 
    	@scotch = Scotch.new
        erb :"scotches/new"
    end

    #create 
    post '/scotches' do
        # uncomment the next line to print the params in the console:
        # p params  
        @scotch = Scotch.create(params[:scotch])
        @scotch.save
        redirect "/"
    end

    #show
    get '/scotches/:id' do
        @scotch = Scotch.find(params[:id])
        # @scotch.brand   # this should display the title, for testing
        erb :"scotches/show"
    end

     # edit
	get '/scotches/:id/edit' do
	    @scotch = Scotch.find(params[:id])
	    erb :"scotches/edit"
	  end

      # update
    put '/scotches/:id' do
        @scotch = Scotch.find(params[:id])
        if @scotch.update_attributes(params[:scotch])
          redirect("/scotches")
        else
          erb :"scotches/edit"
        end

    end

    #delete
    delete '/scotches/:id' do
    	@scotch = Scotch.find(params[:id])
    	@scotch.destroy
    	redirect("/scotches")
        
	end
end