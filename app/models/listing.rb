class Listing < ApplicationRecord
  has_many :list_applications, dependent: :destroy
  has_many :users, through: :list_applications
  has_many_attached :images
  geocoded_by :address
  after_validation :geocode
  # validates_presence_of :price, :footage, :bedrooms, :bathrooms, :description, :date_available, :property_owner, :street, :city, :state, :zip
end

