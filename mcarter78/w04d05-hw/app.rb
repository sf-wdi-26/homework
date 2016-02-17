class SnesGamesApp < Sinatra::Base

  #home
  get '/' do
    erb :home
  end

  #index
  get '/snesgames' do
    @snes_games = SnesGame.all
    erb :index
  end

  #new
  get '/snesgames/new' do
    erb :new
  end

  #post
  post '/snesgames' do
    @snes_game = SnesGame.create(params[:snes_game])
    if @snes_game.save
      redirect("/snesgames/#{@snes_game[:id]}")
    end
  end

  #show
  get '/snesgames/:id' do
    @snes_game = SnesGame.find(params[:id])
    erb :show
  end

  #edit
  get '/snesgames/:id/edit' do
    @snes_game = SnesGame.find(params[:id])
    erb :edit
  end

  #update
  post '/snesgames/:id' do
    @snes_game = SnesGame.find(params[:id])
    if @snes_game.update_attributes(params[:snes_game])
      redirect("/snesgames/#{@snes_game[:id]}")
    end
  end

  #delete
  # post '/snesgames/:id' do
  #   @snes_game = SnesGame.find(params[:id])
  #   if @snes_game.destroy
  #     redirect("/snesgames")
  #   end
  # end

end
