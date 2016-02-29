class User < ActiveRecord::Base
  has_many :library_users
  has_many :libraries, through: :library_users
end
