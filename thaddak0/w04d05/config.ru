require 'rubygems'
require 'bundler'
Bundler.require

require './models/castle'
require './app'
use Rack::MethodOverride
run CastlesApp
