class AddInstrumentToArtists < ActiveRecord::Migration
  def change
  	    add_column :artists, :instruments, :string
  end
  def change
  rename_column :table, :old_column_name, :new_column_name
end
end
