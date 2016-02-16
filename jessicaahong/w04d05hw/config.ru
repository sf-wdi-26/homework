require 'rubygems'
require 'bundler'
require 'time'
require 'date'
Bundler.require

# Models
require './models/order'

# Controllers
require './app'

use Rack::MethodOverride
run OrderUp