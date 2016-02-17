class RemoveItemsFromOrder < ActiveRecord::Migration
  def change
    remove_column :orders, :items, :string
  end
end
