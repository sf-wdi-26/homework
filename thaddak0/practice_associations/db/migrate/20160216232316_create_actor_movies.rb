class CreateActorMovies < ActiveRecord::Migration
  def change
    create_table :actor_movies do |t|
      t.integer :actor_id
      t.integer :movie_id

      t.timestamps null: false
    end
    add_index :actor_movies, :actor_id
    add_index :actor_movies, :movie_id
  end
end
