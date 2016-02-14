class CreateFlannels < ActiveRecord::Migration
  def change
  	create_table :flannels do |t|
  		t.string :color
  		t.boolean :terribleLooking?
  		t.timestamps
  	end
  end
end
