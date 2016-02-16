class CreateCastles < ActiveRecord::Migration
  def change
    create_table :castles do |table|
      table.string :name
      table.string :location
      table.string :style
      table.string :architect
      table.timestamps
    end
  end
end
