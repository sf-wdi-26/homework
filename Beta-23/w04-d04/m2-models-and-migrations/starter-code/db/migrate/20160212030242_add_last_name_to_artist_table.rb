class AddLastNameToArtistTable < ActiveRecord::Migration
  def change
  	add_column :artists, :last_name, :string
  end
end
