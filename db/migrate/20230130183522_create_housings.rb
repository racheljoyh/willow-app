class CreateHousings < ActiveRecord::Migration[7.0]
  def change
    create_table :housings do |t|
      t.string :address
      t.string :image
      t.boolean :avaliable?

      t.timestamps
    end
  end
end
