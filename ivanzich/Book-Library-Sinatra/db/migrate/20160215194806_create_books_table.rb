class CreateBooksTable < ActiveRecord::Migration
  def change
   create_table :books do |t|
   	t.string :title
   	t.string :author
   	t.string :isbn
   	t.integer :year_published

   	t.timestamps





  end
 end
end