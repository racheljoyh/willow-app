class CreateListApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :list_applications do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :listing, null: false, foreign_key: true
      t.string :status, default: "Pending"

      t.timestamps
    end
  end
end
