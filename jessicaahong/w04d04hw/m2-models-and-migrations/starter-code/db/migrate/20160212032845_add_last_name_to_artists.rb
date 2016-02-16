class AddLastNameToArtists < ActiveRecord::Migration
  def change
  	add_column :artists, :artist_last_name, :string
  end
end
