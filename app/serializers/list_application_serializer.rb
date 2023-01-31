class ListApplicationSerializer < ActiveModel::Serializer
  attributes :id, :status
  has_one :user
  has_one :listing
end
