class RemoveForeignKeyFromListings < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :listings, :listing_infos
    remove_index :listings, column: :listing_info_id, unique: true
  end
end
