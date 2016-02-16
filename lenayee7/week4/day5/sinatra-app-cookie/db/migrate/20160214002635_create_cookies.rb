class CreateCookies < ActiveRecord::Migration
  def change
  	create_table :cookies do |t|
  		t.string :name 
  		t.string :cookie_type
  		t.string :cookie_name
  		t.string :photo_url
  		t.timestamps null: false
  	end
  end
end
