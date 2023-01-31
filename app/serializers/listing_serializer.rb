class ListingSerializer < ActiveModel::Serializer
  attributes :id, :image, :avaliable?, :price
  has_one :listing_info
end
