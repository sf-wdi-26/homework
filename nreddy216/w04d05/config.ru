require 'rubygems'
require 'bundler'

Bundler.require


require './models/task'
require './app'

use Rack::MethodOverride

run TaskApp
