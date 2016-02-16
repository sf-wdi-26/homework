class CreateSong < ActiveRecord::Migration
  def change
    create_table :songs do |t| #t stands for table
      t.string :title
      t.string :duration
      t.string :year_of_release
      t.string :album_title
      t.timestamps 
    end
  end
end