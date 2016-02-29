class AddLibraryIdToLibraryUsers < ActiveRecord::Migration
  def change
    add_column :library_users, :library_id, :integer
  end
end
