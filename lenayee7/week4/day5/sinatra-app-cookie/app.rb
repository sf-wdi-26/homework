class CookiesApp < Sinatra::Base

	#root route shows cookies
	#index
	get '/' do
		@cookies = Cookie.all
		erb(:"cookies/index")
	end

	# RESTful Controller
	get '/cookies' do 
		@cookies = Cookie.all
		erb(:"cookies/index")
	end

	# new
	get '/cookies/new' do
		@cookie = Cookie.new
		erb(:"cookies/new")
	end

	# create
	post '/cookies' do
		@cookie = Cookie.new(params[:cookie])
		if @cookie.save
			redirect("/cookies")
		else
			erb(:"cookies/new")
		end
	end

	# show
	get '/cookies/:id' do
		@cookie = Cookie.find(params[:id])
		erb(:"cookies/show")
	end

	#edit
	get '/cookies/:id/edit' do
		@cookie = Cookie.find(params[:id])
		erb(:"cookies/edit")
	end

	# update
	put '/cookies/:id' do
		@cookie = Cookie.find(params[:id])
		if @cookie.update_attributes(params[:cookie])
			redirect('/cookies')
		else 
			erb(:"/cookies/<%= cookie.id %>/edit'")
		end
	end

	# delete
	delete '/cookies/:id/delete' do
		@cookie = Cookie.find(params[:id])
		p "deleting"
		if @cookie.destroy
			redirect('/cookies')
		else 
			redirect("/cookies/#{@cookie.id}")
		end
	end
end

























