class MakeDishNameNotNil < ActiveRecord::Migration
  def change
  	change_column :orders, :dish_name, :string
  end
end
