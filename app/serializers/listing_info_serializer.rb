class ListingInfoSerializer < ActiveModel::Serializer
  attributes :id, :footage, :bedrooms, :bathrooms, :description, :date_available, :property_owner, :street, :city, :state, :zip
end