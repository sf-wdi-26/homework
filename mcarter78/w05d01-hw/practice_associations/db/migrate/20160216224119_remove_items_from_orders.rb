class RemoveItemsFromOrders < ActiveRecord::Migration
  def change
    remove_column :orders, :items
  end
end
