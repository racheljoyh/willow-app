class ListingsController < ApplicationController
  # before_action :check_if_admin, only: :create
  skip_before_action :authorize, only: [:index]

  # /listings
  def index 
    listings = Listing.where.not(latitude: nil, longitude: nil)

    render json: listings, status: :ok
  
  end
  
  def show 
    listing = Listing.find(params[:id])
    render json: listing, status: :ok
  end

  # /listings/:id
  def update 
    listing = Listing.find(params[:id])
    listing.update(listing_params)
    render json: listing, status: :ok
  end

  # /listings
  def create
    listing = Listing.create(listing_params)
    render json: listing, status: :created
  end

  # my_listings/all
  def user_listings
    my_listings = Listing.where(:creator_id => @current_user.id)
    render json: my_listings, status: :ok
  end

  def destroy 
    listing = Listing.find(params[:id]).destroy
    head :no_content
  end
  


  private

  def listing_params
    params.permit(:price, :footage, :bedrooms, :bathrooms, :description, :date_available, :property_ownership, :creator_id, :address, images: [])

  end

  
  
end
