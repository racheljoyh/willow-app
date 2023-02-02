class ListingsController < ApplicationController
  # before_action :check_if_admin, only: :create
  skip_before_action :authorize, only: [:index]

  # /listings
  def index 
    listings = Listing.all
    render json: listings, status: :ok
  
  end

  # def user_rentals
  #   rentals = Listing.where(type_of_listing: 'rental')
  #   render json: rentals, status: :ok
  # end
  
end
