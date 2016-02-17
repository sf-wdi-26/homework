class FlannelsApp < Sinatra::Base

	get '/' do
		@flannels = Flannel.all
		p "Flannels: "
		p @flannels		
		erb :index
	end

	get '/flannels' do 
		@flannels = Flannel.all 
		erb :index
	end

	get '/flannels/new' do 
		erb :new
	end

	post '/flannels' do 
		p params
		@flannel = Flannel.create(params[:flannel])
		@flannel.save
		redirect "/"
	end

	get '/flannels/:id' do 
		@flannels = Flannel.all
		@flannels = Flannel.find(params[:id])
		@flannel.color
	end

	delete '/flannels/:id' do 
		@flannel = Flannel.find(params[:id])
		@flannel.destroy
		redirect("/flannels")
		erb :show
	end

end