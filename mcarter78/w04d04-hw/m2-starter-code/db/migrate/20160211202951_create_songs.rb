class CreateSongs < ActiveRecord::Migration
  def change
    # title, duration, year of release, and album title.
    create_table :songs do |t|
       t.string :title
       t.string :duration
       t.string :year_of_release
       t.string :album_title
       t.string :artist_last_name

       t.timestamps
     end
  end
end
