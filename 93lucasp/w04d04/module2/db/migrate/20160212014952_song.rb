class Song < ActiveRecord::Migration
  def change
  	create_table :songs do |t| #t stands for table
      t.string :song_title #add a name attribute of type string to the table
      t.string :duration #also add a photo_url attribute of type string
      t.string :year_of_release # finally add a nationality attribute of type string
      t.string :album_title
      t.timestamps #this will add timestamps for time created and time updated automagically!
    end
  end
end
