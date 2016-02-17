class RemoveArchtiectColumn < ActiveRecord::Migration
  def change
    remove_column :castles, :architect, :string
    add_column :castles, :year_built, :string
  end
end
