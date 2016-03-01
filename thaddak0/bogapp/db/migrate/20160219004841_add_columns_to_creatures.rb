class AddColumnsToCreatures < ActiveRecord::Migration
  def change
    add_column :creatures, :creature, :string
    add_column :creatures, :name, :string
    add_column :creatures, :description, :string
  end
end
