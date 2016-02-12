class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |table|
      table.string :title
      table.string :artist
      table.string :genre
      table.timestamps
    end
  end
end
