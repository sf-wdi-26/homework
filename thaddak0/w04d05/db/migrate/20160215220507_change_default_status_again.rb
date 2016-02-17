class ChangeDefaultStatusAgain < ActiveRecord::Migration
  def change
    change_column :castles, :in_use, :boolean, :default => false
    change_column :castles, :heritage, :boolean, :default => false
    change_column :castles, :ruins, :boolean, :default => false
  end
end
