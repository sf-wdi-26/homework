class Actor < ActiveRecord::Base
	has_many :actor_movies
	has_many :movies, through: :actor_movies
	validates :first_name, presense: true
			:last_name, presense: true
end
