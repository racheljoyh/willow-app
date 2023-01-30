class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :housing, null: false, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
