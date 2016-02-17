class ChangePopular < ActiveRecord::Migration
  def change
    rename_column :wines, :popular, :region
  end
end
