class EditsColumnsSongs < ActiveRecord::Migration
  def change
  	rename_column :songs, :name, :title
  	add_column :songs, :artist_last_name, :string
  	remove_column :artists, :artist_last_name
  end
end
