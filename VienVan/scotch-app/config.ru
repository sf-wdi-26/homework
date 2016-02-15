require "rubygems"
require "bundler"
Bundler.require

#models
require "./models/book"

#controller
require "./app"

run BooksApp
