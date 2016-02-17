class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :order 
      t.string :title
      t.string :table_number 
      t.timestamps
    end
  end
end
