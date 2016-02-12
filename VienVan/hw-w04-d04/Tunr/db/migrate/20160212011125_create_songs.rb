class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :duration
      t.string :year_of_release
      t.string :album_title
    end
  end
end
