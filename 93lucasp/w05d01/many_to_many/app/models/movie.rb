class Movie < ActiveRecord::Base
	has_many :movie_actors
	has_many :actors, through: :movie_actors, dependent: :destroy
	validates :title, presence: :true
	validates :description, presence: :true
	validates :year, presence: :true

end
