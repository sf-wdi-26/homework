class CreateSongs < ActiveRecord::Migration
  def change
  	create_table :songs do |t|
       t.string :name
       t.string :duration
       t.string :year_of_release
       t.string :office_number

       t.timestamps
     end
  end
end
