class AddActorIdAndMovieIdToActorsMovies < ActiveRecord::Migration
  def change
    add_column :actor_movies, :actor_id, :integer
    add_column :actor_movies, :movie_id, :integer
  end
end
