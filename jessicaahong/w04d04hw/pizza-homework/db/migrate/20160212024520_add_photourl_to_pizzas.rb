class AddPhotourlToPizzas < ActiveRecord::Migration
  def change
  	add_column :pizzas, :photo_url, :string
  end
end
