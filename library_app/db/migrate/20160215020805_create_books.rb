class CreateBooks < ActiveRecord::Migration
  def change
  	Create_table :books do |t|
  		t.string :title 
  		t.string :author
  		t.string :genre
  		t.timestamps
  	end
end
