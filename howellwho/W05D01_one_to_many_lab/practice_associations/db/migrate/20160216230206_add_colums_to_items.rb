class AddColumsToItems < ActiveRecord::Migration
  def change
    add_column :items, :name, :string
    add_column :items, :description, :string
    add_column :items, :price, :integer
  end
end
