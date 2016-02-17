class Movie < ActiveRecord::Base
validates :title, presence: true
validates :description, presence: true
validates :year, numericality: {less_than_or_equal_to: :Date.today.year}
has_many :actors, through: :actors_movies
end
