class ListingSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :images, :price, :footage, :bedrooms, :bathrooms, :description, :date_available, :property_owner, :address, :latitude, :longitude

  def images
    rails_blob_path(object.images, only_path: true) if object.images.attached?
  end
end
