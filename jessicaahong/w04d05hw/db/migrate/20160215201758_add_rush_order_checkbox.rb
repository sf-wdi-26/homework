class AddRushOrderCheckbox < ActiveRecord::Migration
  def change
  	add_column :orders, :rush?, :string
  end
end
