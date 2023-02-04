class ListingSerializer < ActiveModel::Serializer
  attributes :id, :image, :avaliable?, :price, :footage, :bedrooms, :bathrooms, :description, :date_available, :property_owner, :street, :city, :state, :zip
end
