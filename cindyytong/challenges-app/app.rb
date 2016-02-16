class ChallengesApp < Sinatra::Base
	get '/' do
	erb :home
	end

	#edit
get '/challenges/:id/edit' do
	@challenge = Challenge.find(params[:id])
	erb(:"./views/challenges/edit")
end

#update
put '/challenges/:id' do
	@challenge = Challenge.find(params[:id])
	if @challenge.update_attributes(params[:challenge])
		redirect("/challenges")
	else
		erb(:"./view/challenges/edit")
	end
end

#delete
delete '/challenges/:id' do
	@challenge = Challenge.find(params[:id])
		if @challenge.destroy
			redirect('/challenges')
		else
			redirect("/challenges/#{@challenge.id}")
		end
end
end