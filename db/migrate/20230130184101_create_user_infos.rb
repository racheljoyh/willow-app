class CreateUserInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :user_infos do |t|
      t.date :dob
      t.string :phone
      t.integer :income
      t.boolean :employed
      t.string :employer
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
