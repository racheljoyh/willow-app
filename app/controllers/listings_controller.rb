class ListingsController < ApplicationController
  # before_action :check_if_admin, only: :create

  def index 
    listings = Listing.all
    render json: listings, status: :ok
  
  end

  def rentals_index
    rentals = Listing.where(type_of_listing: 'rental')
    render json: rentals, status: :ok
  end
  
  
  def homes_index
    homes = Listing.where(type_of_listing: 'sfh')
    render json: homes, status: :ok
  end

end
