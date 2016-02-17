class CreateOrderTable < ActiveRecord::Migration
  def change
  	create_table :orders do |table|
    	table.string :dish_name, :null => false
  		table.string :dish_type
  		table.integer :table_number, :null => false
  		# table.boolean :rush?, :default => false
  		table.string :special_requests

  		table.timestamps
  	end
  end
end
