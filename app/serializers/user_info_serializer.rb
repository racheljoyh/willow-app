class UserInfoSerializer < ApplicationSerializer
  attributes :id, :dob, :phone, :income, :employed, :employer
  has_one :user
end
