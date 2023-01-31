class CreateListingInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :listing_infos do |t|
      t.integer :footage
      t.integer :bedrooms
      t.integer :bathrooms
      t.string :description
      t.string :date_available
      t.string :property_owner
      t.string :street
      t.string :city
      t.string :state
      t.string :zip

      t.timestamps
    end
  end
end
