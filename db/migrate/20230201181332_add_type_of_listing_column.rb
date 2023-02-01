class AddTypeOfListingColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :type_of_listing, :string
  end
end
