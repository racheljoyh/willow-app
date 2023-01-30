class HousingInfoSerializer < ApplicationSerializer
  attributes :id, :footage, :bedrooms, :bathrooms, :description, :pets?, :date_available, :property_owner
  has_one :housing
end
