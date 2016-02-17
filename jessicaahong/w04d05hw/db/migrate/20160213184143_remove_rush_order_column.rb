class RemoveRushOrderColumn < ActiveRecord::Migration
  def change
  	remove_column :orders, :rush?
  end
end
