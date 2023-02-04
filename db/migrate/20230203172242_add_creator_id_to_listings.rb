class AddCreatorIdToListings < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :creator_id, :integer
  end
end
