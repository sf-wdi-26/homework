require 'rubygems'
require 'bundler'
Bundler.require

# Models
require './models/order'

# Controllers
require './app'

use Rack::MethodOverride
run OrderUp