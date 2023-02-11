class Listing < ApplicationRecord
  
  has_many :list_applications, dependent: :destroy
  has_many :users, through: :list_applications
  has_many_attached :images 
  geocoded_by :address
  after_validation :geocode


 
end

