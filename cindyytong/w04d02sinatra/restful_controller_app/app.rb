class FirstSinatraApp < Sinatra::Base

	get "/" do
	erb "Hello World"	
	end

	get '/attractions' do
		@attractions = ["Catch the sea lions lounging around Pier 39", "Have clam chowder at Fisherman's Wharf", "Enjoy the magic at the Walt Disney Family Museum", "See the Palace of Fine Arts.", "Climb the Lyon Street steps and enjoy the views.", "Ride the St. Francis Hotel glass elevators to the top of Union Square.", "Visit Grace Cathedral, stay for yoga on the labyrinth."]
	 	erb :"attractions"
	end


#This will return the individual attraction on each page

	# get '/attractions/:id' do
	# 	@attractions = ["Catch the sea lions lounging around Pier 39", "Have clam chowder at Fisherman's Wharf", "Enjoy the magic at the Walt Disney Family Museum", "See the Palace of Fine Arts.", "Climb the Lyon Street steps and enjoy the views.", "Ride the St. Francis Hotel glass elevators to the top of Union Square.", "Visit Grace Cathedral, stay for yoga on the labyrinth."]
	# 	p params
	#  	attraction = @attractions[params[:id].to_i]
	#  	attraction 
	#  end

	get '/attractions/:id' do
		attraction_hashes = create_objects
		@attractions = ["Catch the sea lions lounging around Pier 39", "Have clam chowder at Fisherman's Wharf", "Enjoy the magic at the Walt Disney Family Museum", "See the Palace of Fine Arts.", "Climb the Lyon Street steps and enjoy the views.", "Ride the St. Francis Hotel glass elevators to the top of Union Square.", "Visit Grace Cathedral, stay for yoga on the labyrinth."]
	 	@attraction = @attractions[params[:id].to_i]
	 	erb :"show"
	 	#erb is a method which links the file you want to appear when you visit the attractions/id page
	 #attraction is a string (It is going to be catch the sea, etc, by returning attraction, it will just display it)
	end

	def create_objects
		@attraction_hashes = []
		@attractions = ["Catch the sea lions lounging around Pier 39", "Have clam chowder at Fisherman's Wharf", "Enjoy the magic at the Walt Disney Family Museum", "See the Palace of Fine Arts.", "Climb the Lyon Street steps and enjoy the views.", "Ride the St. Francis Hotel glass elevators to the top of Union Square.", "Visit Grace Cathedral, stay for yoga on the labyrinth."]
		@attractions.each do |attraction, index|
			@attraction_hashes << {id: index, name: attraction, img: "public/IMG_8386.jpg" }
		end
		@attraction_hashes
	end
end
