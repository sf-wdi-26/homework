class Movie < ActiveRecord::Base
	has_many :actor_movies
	has_many :actors, through: :actor_movies

	# validates :title, presence: true
	# 		:year, presence: true, numericality: { :greater_than 2016 }
	# 		:description, presence: true
end
