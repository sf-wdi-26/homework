class CreatePizzas < ActiveRecord::Migration
  def change
  	create_table :pizzas do |t|
       t.string :name
       t.string :photo_url

       t.timestamps
     end
  end
end
