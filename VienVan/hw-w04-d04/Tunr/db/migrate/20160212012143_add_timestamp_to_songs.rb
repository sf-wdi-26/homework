class AddTimestampToSongs < ActiveRecord::Migration
  def change
    add_column :songs, :created_at, :datetime
    add_column :songs, :updated_at, :datetime
    add_column :managers, :created_at, :datetime
    add_column :managers, :updated_at, :datetime
  end
end
