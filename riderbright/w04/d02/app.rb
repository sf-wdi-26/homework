class RestfulControllerApp < Sinatra::Base
  get "/" do  
    @games = ["SmashBox","GalacticMac","Bandit"]
    erb :games
  end

  get "/" do  
    @games = ["SmashBox","GalacticMac","Bandit"]
    game = @games[params[:id].to_i]
  end
end
