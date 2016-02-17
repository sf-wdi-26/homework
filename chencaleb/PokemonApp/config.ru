require 'rubygems'
require 'bundler'
Bundler.require

require './models/pokemon'
require './app'

use Rack::MethodOverride
run PokemonApp