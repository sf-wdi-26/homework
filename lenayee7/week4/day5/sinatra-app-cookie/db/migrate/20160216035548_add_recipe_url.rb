class AddRecipeUrl < ActiveRecord::Migration
  def change
  	change_column :cookies, :name, :string, null: false
  	add_column :cookies, :recipe_url, :string
	end
end