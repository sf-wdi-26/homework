class Manager < ActiveRecord::Migration
  def change
    create_table :managers do |t|
         t.string :name
         t.string :email
         t.string :office_number
         t.timestamps
    end
  end
end


