class Cookie < ActiveRecord::Base
	validates :name, presence: true
	def to_s
	end
end
