class CreateChallenges < ActiveRecord::Migration
  def change
  	create_table "challenges", force: :cascade do |t|
  		t.string "name"
  		t.string "photo_url"
  		t.string "difficulty"
  		t.string "start"
  		t.string "end"

  		t.timestamps()
  	end
  end
end
