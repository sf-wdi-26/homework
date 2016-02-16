class ChangePhoneNumberToString < ActiveRecord::Migration
  def change
    change_column :managers, :phone_number, :string
  end
end
