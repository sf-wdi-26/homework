class Movie < ActiveRecord::Base
	has_many :actors_movies, dependent: :destroy
	has_many :actors, through: :actors_movies
	validates :title, :description, presence: true 
	validates :year, numericality: { :less_than_or_equal_to => Date.current.year}
	end

