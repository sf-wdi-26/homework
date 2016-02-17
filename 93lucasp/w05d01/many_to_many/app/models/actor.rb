class Actor < ActiveRecord::Base
	has_many :movie_actors
	has_many :movies, through: :movie_actors, dependent: :destroy
	validates :first_name, presence: :true
	validates :last_name, presence: :true
end
