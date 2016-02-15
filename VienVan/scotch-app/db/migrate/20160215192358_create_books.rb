class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |table|
      table.string :title
      table.string :author
      table.string :genre
      table.string :rating
      table.string :feel
    end
  end
end
