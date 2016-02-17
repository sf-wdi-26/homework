class AddOrderIdToItem < ActiveRecord::Migration
  def change
    add_column :items, :order_id, :integer
    add_index :items, :order_id
  end
end
