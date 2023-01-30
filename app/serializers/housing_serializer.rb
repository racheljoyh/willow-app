class HousingSerializer < ActiveModel::Serializer
  attributes :id, :address, :image, :avaliable?
end
