class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :image
      t.string :avaliable?
      t.integer :price
      t.belongs_to :listing_info, null: false, foreign_key: true

      t.timestamps
    end
  end
end
