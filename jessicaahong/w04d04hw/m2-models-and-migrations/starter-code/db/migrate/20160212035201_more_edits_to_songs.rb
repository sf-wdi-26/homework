class MoreEditsToSongs < ActiveRecord::Migration
  def change
  	rename_column :songs, :office_number, :album_title
  end
end
