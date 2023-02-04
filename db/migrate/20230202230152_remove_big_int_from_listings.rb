class RemoveBigIntFromListings < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :listing_info_id
  end
end
