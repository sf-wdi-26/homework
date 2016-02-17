class CreateTasksNotArtists < ActiveRecord::Migration
  def change
    rename_column :tasks, :artist, :description
    rename_column :tasks, :genre, :project
    add_column :tasks, :due_date, :string
  end
end
