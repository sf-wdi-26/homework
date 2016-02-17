class CreateActors < ActiveRecord::Migration
  def change
    create_table :actors do |t|
      t.string :fist_name
      t.string :last_name

      t.timestamps null: false
    end
  end
end
