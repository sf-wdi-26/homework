class ChallengesApp < Sinatra::Base
#index page with list of all challenges
get '/challenges' do
	@challenges = Challenge.all
	#You need ./ for erb to say root directory when referencing a file inside of the challenges folder, also when you're not in main controller app you need erb with ()
	erb(:"./challenges/index")
end

#new page to input challenge information
get '/challenges/new' do
	@challenge = Challenge.new
	erb(:"./challenges/new")
end

#create
post '/challenges' do
	@challenge = Challenge.new(params[:challenge])
	if @challenge.save
		redirect("/challenges/#{@challenge.id}")
	else
		erb(:"./challenges/new")
	end
end

#show
get '/challenges/:id' do
	@challenge = Challenge.find(params[:id].to_i)
	erb(:"./challenges/show")
end

#edit
get '/challenges/:id/edit' do
	@challenge = Challenge.find(params[:id].to_i)
	erb(:'./challenges/edit')
end

#update
put '/challenges/:id' do
	@challenge = Challenge.find(params[:id].to_i)
	if @challenge.update_attributes(params[:challenge])
		redirect('/challenges')
	else
		erb(:'./challenges/edit')
	end
end

#delete
delete '/challenges/:id/delete' do
	@challenge = Challenge.find(params[:id].to_i)
	@challenge.destroy
	redirect('/challenges')
	end

end

