class RenameManagerNumberCellphoneNumber < ActiveRecord::Migration
  def change
    rename_column :managers, :office_number, :cell_phone_number
  end
end
