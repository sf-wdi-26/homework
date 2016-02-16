require 'rubygems'
require 'bundler'
Bundler.require

require './models/strain'
require './app'

use Rack::MethodOverride
run StrainsApp