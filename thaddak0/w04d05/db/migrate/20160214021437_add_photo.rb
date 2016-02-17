class AddPhoto < ActiveRecord::Migration
  def change
    add_column :castles, :photo_url, :string
  end
end
