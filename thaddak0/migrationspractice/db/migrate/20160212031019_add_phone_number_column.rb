class AddPhoneNumberColumn < ActiveRecord::Migration
  def change
  	add_column :managers, :phone_number, :integer
  end
end
