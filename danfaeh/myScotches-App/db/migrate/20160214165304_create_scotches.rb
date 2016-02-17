class CreateScotches < ActiveRecord::Migration
  def change
    create_table :scotches do |t|
      t.string :name 
      t.string :year 
      t.boolean :blended
      t.integer :rating
      t.timestamps
    end
  end
end
