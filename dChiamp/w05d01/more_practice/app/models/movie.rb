class Movie < ActiveRecord::Base
  has_many :actor_movies
  has_many :actors, through: :actor_movies
  validates :title, presence: true
            :description, presence: true
            :year, numericality: { 1850...2017 }
end
