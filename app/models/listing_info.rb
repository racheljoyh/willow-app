class ListingInfo < ApplicationRecord
  validates_presence_of :date_available, :street, :city, :state, :zip
end
