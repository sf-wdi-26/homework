class Movie < ActiveRecord::Base
	has_many :create_actor_movie_table
	has_many :actors, through :create_actor_movie_table
end 