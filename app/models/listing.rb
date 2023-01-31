class Listing < ApplicationRecord
  belongs_to :listing_info
  has_many :list_applications
  has_many :users, through: :list_applications
  # validates_presence_of :price, :avaliable?
end
