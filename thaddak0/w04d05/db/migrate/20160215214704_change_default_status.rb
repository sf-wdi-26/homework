class ChangeDefaultStatus < ActiveRecord::Migration
  def change
    change_column :castles, :in_use, :boolean, :default => true
    change_column :castles, :heritage, :boolean, :default => true
    change_column :castles, :ruins, :boolean, :default => true
  end
end
