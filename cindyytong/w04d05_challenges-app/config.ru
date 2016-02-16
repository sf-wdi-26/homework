require 'rubygems'
require 'bundler'
Bundler.require

require './models/challenge'

require './app'
require './controllers/challenges_controller'

use Rack::MethodOverride
run ChallengesApp
