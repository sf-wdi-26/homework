require 'rubygems'
require 'bundler'
Bundler.require


require './models/pizza'

require './app'
require './controllers/pizzas_controller'

run PizzaShop
