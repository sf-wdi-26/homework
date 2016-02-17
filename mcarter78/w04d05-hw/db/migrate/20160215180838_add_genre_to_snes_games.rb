class AddGenreToSnesGames < ActiveRecord::Migration
  def change
    add_column :snes_games, :genre, :string
  end
end
