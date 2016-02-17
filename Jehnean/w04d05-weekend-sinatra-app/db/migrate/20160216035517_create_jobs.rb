class CreateJobs < ActiveRecord::Migration
  def change
  	create_table :jobs do |t| #t stands for table
      t.string :title 
      t.string :company 
      t.string :zip 
      t.string :salary 
      t.string :description 
      t.timestamps #this will add timestamps for time created and time updated automagically!
    end
  end
end