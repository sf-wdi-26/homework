class FirstSinatraApp < Sinatra::Base

	get "/" do
	 @attractions = ["Catch the sea lions lounging around Pier 39", "Have clam chowder at Fisherman's Wharf", "Enjoy the magic at the Walt Disney Family Museum", "See the Palace of Fine Arts.", "Climb the Lyon Street steps and enjoy the views.", "Ride the St. Francis Hotel glass elevators to the top of Union Square.", "Visit Grace Cathedral, stay for yoga on the labyrinth."]
	erb :'attractions'	
	end

	post "/" do
	  "I got #{params[:command]}."
	end


	get "/:id" do
		@attractions = ["Catch the sea lions lounging around Pier 39", "Have clam chowder at Fisherman's Wharf", "Enjoy the magic at the Walt Disney Family Museum", "See the Palace of Fine Arts.", "Climb the Lyon Street steps and enjoy the views.", "Ride the St. Francis Hotel glass elevators to the top of Union Square.", "Visit Grace Cathedral, stay for yoga on the labyrinth."]
	 	@attraction = @attractions[params[:id].to_i - 1]
	end

end
