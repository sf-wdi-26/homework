class CreatePizzas < ActiveRecord::Migration
  def change
    create_table :pizzas do |t|
            t.string :restaurant
            t.string :style
            t.string :stars
            t.timestamps
        end
  end
end
