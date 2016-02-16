class AddStatusColumns < ActiveRecord::Migration
  def change
    add_column :castles, :in_use, :boolean, :default => false
    add_column :castles, :heritage, :boolean, :default => false
    add_column :castles, :ruins, :boolean, :default => false
  end
end
