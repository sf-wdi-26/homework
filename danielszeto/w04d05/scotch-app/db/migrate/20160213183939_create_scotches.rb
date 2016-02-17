class CreateScotches < ActiveRecord::Migration
    def change
        create_table :scotches do |t|
            t.string :brand
            t.string :year
            t.string :blended
            t.string :rating
            t.timestamps
        end
    end
end
