class User < ApplicationRecord
  has_secure_password
  has_many :list_applications
  has_many :listings, through: :list_applications
  validates_presence_of :first_name, :last_name, :email, :password
  
end
