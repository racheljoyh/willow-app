class CreateHousingInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :housing_infos do |t|
      t.integer :footage
      t.integer :bedrooms
      t.integer :bathrooms
      t.string :description
      t.boolean :pets?
      t.date :date_available
      t.string :property_owner
      t.belongs_to :housing, null: false, foreign_key: true

      t.timestamps
    end
  end
end
