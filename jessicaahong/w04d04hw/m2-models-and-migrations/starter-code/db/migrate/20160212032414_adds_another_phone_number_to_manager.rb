class AddsAnotherPhoneNumberToManager < ActiveRecord::Migration
  def change
  	add_column :managers, :phone_number, :string
  end
end
