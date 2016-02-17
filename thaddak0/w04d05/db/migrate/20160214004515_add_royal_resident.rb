class AddRoyalResident < ActiveRecord::Migration
  def change
    add_column :castles, :royal_residents, :string
  end
end
