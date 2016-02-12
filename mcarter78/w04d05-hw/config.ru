require 'rubygems'
require 'bundler'
Bundler.require

# Models
require './models/'#modelname

# Controllers
require './app'
require './controllers/'#controllername

run #AppName
