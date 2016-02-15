class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |table|
      table.string :title
      table.string :artist
      table.string :genre
      table.timestamps
    end
  end
end
