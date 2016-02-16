class SnesGamesController < Sinatra::Base

  #index
  get '/snesgames/index' do
    @snes_games = SnesGame.all
    erb :index
  end

  #new
  get '/snesgames/new' do
    erb :new
  end

  #post

  #edit

  #update

  #delete

end
