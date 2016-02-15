class CreateWines < ActiveRecord::Migration
  def change
    create_table :wines do |t|
      t.string   :name
      t.string   :category
      t.string   :country
      t.string   :popular reigion
      t.string   :price
      t.timestamps
      
    end
  end
end
