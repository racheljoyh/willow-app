class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :image
      t.string :avaliable?
      t.integer :price

      t.timestamps
    end
  end
end
