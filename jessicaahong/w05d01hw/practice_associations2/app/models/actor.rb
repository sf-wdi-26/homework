class Actor < ActiveRecord::Base
	has_many :actor_movies
	has_many :movies, through: :actor_movies


	# validates :first_name, presence: true
	# 		  :last_name, presence: true
end
