class Actor < ActiveRecord::Base
  has_many :actor_movie_table
  has_many :movie, through::actor_movie_table
end
