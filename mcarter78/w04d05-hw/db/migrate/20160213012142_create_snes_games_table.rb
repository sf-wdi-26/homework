class CreateSnesGamesTable < ActiveRecord::Migration
  def change
    create_table :snes_games do |table|
      table.string :title
      table.string :developer
      table.string :publisher
      table.string :year_released
      table.string :box_art_url
      table.boolean :owned
      table.timestamps
    end
  end
end
