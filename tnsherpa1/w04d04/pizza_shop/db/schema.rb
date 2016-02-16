ActiveRecord::Schema.define(version: 20150710022312) do

  enable_extension "plpgsql"

  create_table "pizzas", force: :cascade do |t|
    t.string   "name"
    t.string   "sauce"
    t.boolean  "cheese"
    t.boolean  "mushrooms"
    t.string   "extra_toppings"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
