class AddActorIdAndMovieIdToRole < ActiveRecord::Migration
  def change
    add_column :roles, :actor_id, :string
    add_column :roles, :integer, :string
    add_column :roles, :movie_id, :string
    add_column :roles, :integer, :string
  end
end
