class Movie < ActiveRecord::Base
  has_many :actor_movie_table
  has_many :actor, through::actor_movie_table
end
