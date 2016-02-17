class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.datetime :created_at
      t.timestamps null: false
    end
  end
end
