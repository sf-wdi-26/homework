class CreateActorMovies < ActiveRecord::Migration
  def change
    create_table :actor_movies do |t|

      t.timestamps null: false
    end
  end
end
