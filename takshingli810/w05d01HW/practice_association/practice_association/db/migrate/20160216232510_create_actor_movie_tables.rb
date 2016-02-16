class CreateActorMovieTables < ActiveRecord::Migration
  def change
    create_table :actor_movie_tables do |t|
      t.integer :actor_id
      t.integer :movie_id

      t.timestamps null: false
    end
  end
end
