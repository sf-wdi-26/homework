class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |table|
       table.string :title
       table.string :duration
       table.string :year_of_release
       table.string :album_title
       table.timestamps
     end
  end
end
