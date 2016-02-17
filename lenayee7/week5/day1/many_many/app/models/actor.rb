class Actor < ActiveRecord::Base
	has_many :actor_movies, dependent: :destroy
	has_many :movies, through: :actor_movies
	validates :first_name, :last_name, presence: true
	
	end

