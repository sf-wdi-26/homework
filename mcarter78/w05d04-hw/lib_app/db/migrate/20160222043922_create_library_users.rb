class CreateLibraryUsers < ActiveRecord::Migration
  def change
    create_table :library_users do |t|

      t.timestamps null: false
    end
  end
end
