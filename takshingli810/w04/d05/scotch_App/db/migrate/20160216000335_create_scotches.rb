class CreateScotches < ActiveRecord::Migration
  def change
     create_table :scotches do |t|
      t.string :name
      t.string :birthplace
      t.string :year
      t.string :rating
    end
  end
end
 