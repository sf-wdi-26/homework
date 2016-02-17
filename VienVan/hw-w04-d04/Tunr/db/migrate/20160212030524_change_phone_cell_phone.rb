class ChangePhoneCellPhone < ActiveRecord::Migration
  def change
    rename_column :managers, :phone_number, :cell_phone 
  end
end
