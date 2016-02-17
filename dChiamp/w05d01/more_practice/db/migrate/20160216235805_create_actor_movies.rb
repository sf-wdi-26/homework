class CreateActorMovies < ActiveRecord::Migration
  def change
    create_table :actor_movies do |t|
      t.integer :movie_id
      t.integer :actor_id
      t.timestamps null: false
    end
  end
end
