class CreateScotch < ActiveRecord::Migration
  def change
  	create_table :scotches do |s|
  		s.string :name
  		s.string :brand
  		s.string :country
  		s.text :description
  		s.decimal :price
  		s.timestamps
  	end
  end
end
