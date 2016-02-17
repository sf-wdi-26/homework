class Actor < ActiveRecord::Base
	has_many :create_actor_movie_table
	has_many :movies, through :create_actor_movie_table
end
