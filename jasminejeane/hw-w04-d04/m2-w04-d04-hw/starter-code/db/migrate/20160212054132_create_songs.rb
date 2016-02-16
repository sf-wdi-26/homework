class CreateSongs < ActiveRecord::Migration
  def change
  	create_table :songs do |t| #t stands for table
      t.string :title 
      t.string :duration 
      t.integer :year 
      t.string :album_title

      t.timestamps #this will add timestamps for time created and time updated automagically!
    end
  end
end
