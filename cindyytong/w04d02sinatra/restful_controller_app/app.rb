class FirstSinatraApp < Sinatra::Base
	get "/" do
	erb "Hello World"	
	end

	get '/attractions' do
		@attractions = ["Catch the sea lions lounging around Pier 39", "Have clam chowder at Fisherman's Wharf", "Enjoy the magic at the Walt Disney Family Museum"]
	 	erb :"attractions"
	end


	get '/attractions/:id' do
		attraction_hashes = create_objects
		@attractions = ["Catch the sea lions lounging around Pier 39", "Have clam chowder at Fisherman's Wharf", "Enjoy the magic at the Walt Disney Family Museum"]
	 	@attraction = attraction_hashes[params[:id].to_i]
	 	erb :"show"
	 	#erb is a method which links the file you want to appear when you visit the attractions/id page
	 #attraction is a string (It is going to be catch the sea, etc, by returning attraction, it will just display it)
	end

	def create_objects
		@attraction_hashes = []
		@attractions = ["Catch the sea lions lounging around Pier 39", "Have clam chowder at Fisherman's Wharf", "Enjoy the magic at the Walt Disney Family Museum"]
		@attractions.each_with_index do |attraction, index|
			@attraction_hashes << {id: index, name: attraction, img: "public/IMG_8386.jpg" }
		end
		@attraction_hashes
	end
end
