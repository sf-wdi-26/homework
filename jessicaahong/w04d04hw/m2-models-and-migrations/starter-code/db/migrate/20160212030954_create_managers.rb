class CreateManagers < ActiveRecord::Migration
  def change
  	create_table :managers do |t|
       t.string :title
       t.string :email
       t.string :album_title

       t.timestamps
     end
  end
end
