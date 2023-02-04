class DropListingInfoTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :listing_infos, force: :cascade 
  end
end
