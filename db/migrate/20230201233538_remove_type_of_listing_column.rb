class RemoveTypeOfListingColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :type_of_listing, :string
  end
end
