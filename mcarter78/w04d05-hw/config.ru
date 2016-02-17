require 'rubygems'
require 'bundler'
Bundler.require

# Models
require './models/snes_game'

# Controllers
require './app'
require './controllers/snes_games_controller'

run SnesGamesApp
