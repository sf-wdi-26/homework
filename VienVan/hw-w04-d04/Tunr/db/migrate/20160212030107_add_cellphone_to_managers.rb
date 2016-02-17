class AddCellphoneToManagers < ActiveRecord::Migration
  def change
    add_column :managers, :phone_number, :int
  end
end
