class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :status
  has_one :user
  has_one :housing
end
