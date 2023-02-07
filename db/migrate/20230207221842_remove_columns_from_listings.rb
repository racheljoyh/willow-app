class RemoveColumnsFromListings < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :street, :string
    remove_column :listings, :city, :string
    remove_column :listings, :state, :string
    remove_column :listings, :zip, :string
    add_column :listings, :address, :string
  end
end
