class AddColumnsToListings < ActiveRecord::Migration[7.0]
  def change 
    add_column :listings, :footage, :integer
    add_column :listings, :bedrooms, :integer
    add_column :listings, :bathrooms, :integer
    add_column :listings, :description, :string
    add_column :listings, :date_available, :string
    add_column :listings, :property_owner, :string
    add_column :listings, :street, :string
    add_column :listings, :city, :string
    add_column :listings, :state, :string
    add_column :listings, :zip, :string
  end
end
