class ListingSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :price, :footage, :bedrooms, :bathrooms, :description, :date_available, :property_owner, :address, :latitude, :longitude, :images


  def images 
    return unless object.images.attached?

    object.images.map do |image|
      image.blob.attributes
        .slice('id')
        .merge(url: image_url(image))
    end
  end

  def image_url(image)
    url_for(image)
  end

end
