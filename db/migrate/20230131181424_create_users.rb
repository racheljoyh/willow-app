class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :password
      t.integer :income
      t.string :dob
      t.boolean :employed?
      t.string :employer
      t.string :role, default: 'user'

      t.timestamps
    end
  end
end
