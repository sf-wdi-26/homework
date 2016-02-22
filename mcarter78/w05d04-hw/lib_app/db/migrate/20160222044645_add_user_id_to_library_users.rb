class AddUserIdToLibraryUsers < ActiveRecord::Migration
  def change
    add_column :library_users,  :user_id, :integer
  end
end
