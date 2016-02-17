class GetRidNullConstraints < ActiveRecord::Migration
  def change
  	change_column :orders, :dish_name, :string, :null => true
  	change_column :orders, :table_number, :string, :null => true
  end
end
