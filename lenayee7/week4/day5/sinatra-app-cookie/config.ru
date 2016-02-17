require 'rubygems'
require 'bundler'
Bundler.require

#Models
require './models/cookie'

# Controllers
require './app'

use Rack::MethodOverride
run CookiesApp
