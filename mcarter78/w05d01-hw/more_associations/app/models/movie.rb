class Movie < ActiveRecord::Base
  has_many :actor_movies
  has_many :actors, through: :actor_movies
  validates :title, :description, :year, presence: true
  validates :year, numericality: { less_than_or_equal_to: Date.today.year }
end
