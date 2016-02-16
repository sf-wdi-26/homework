require 'rubygems'
require 'bundler'
Bundler.require

# Models
require './models/scotch'
require './app'
use Rack::MethodOverride

run ScotchApp

