require "rubygems"
require "bundler"
Bundler.require

#models
require "./models/book"

#controller
require "./app"

use Rack::MethodOverride
run BooksApp
