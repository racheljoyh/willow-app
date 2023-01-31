class ListingsController < ApplicationController
  before_action :check_if_admin, only: [:create]

  def index 
    listings = Listing.all
    render json: listings, status: :ok
  
  end

end
