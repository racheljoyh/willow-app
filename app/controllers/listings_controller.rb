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
    render json: listing.as_json.merge(
      images: listing.images.map do |image|
        url_for(image)
      end
    ), status: :ok
  end

  # /listings/:id
  def update 
    listing = Listing.find(params[:id])
    listing.update(listing_params)
    render json: listing, status: :ok
  end

  # /listings
  def create
    listing = Listing.create(listing_params.except(:images))
    images = params[:images]

    if images
      images.each do |image|
        listing.images.attach(image)
      end
    end

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
    params.permit(:price, :footage, :bedrooms, :bathrooms, :description, :date_available, :property_owner, :creator_id, :address, images:[])

  end

  
end
