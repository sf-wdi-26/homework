require "rubygems"
require "bundler"
Bundler.require

require "./models/wine"
require "./app"
use Rack::MethodOverride

run WinesApp