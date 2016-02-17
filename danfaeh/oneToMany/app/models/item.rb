class Item < ActiveRecord::Base
  belongs_to :orders, dependent: :destroy
end
