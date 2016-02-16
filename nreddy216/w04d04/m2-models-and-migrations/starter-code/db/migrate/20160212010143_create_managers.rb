class CreateManagers < ActiveRecord::Migration
  def change
    create_table :managers do |table|
       table.string :name
       table.string :email
       table.string :office_number
       table.timestamps
     end
  end
end
