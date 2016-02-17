class Actor < ActiveRecord::Base
	has_many :actor_movie
	has_many :movies, through :actor_movie
end
