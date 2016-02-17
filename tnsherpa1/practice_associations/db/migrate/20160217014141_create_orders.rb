class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :created_at
      t.integer :item_id
      t.timestamps null: false
    end
  end
end
