class ChangeColumnInStrainsToNewColumnName < ActiveRecord::Migration
  def change
    rename_column :strains, :type, :kind
  end
end
