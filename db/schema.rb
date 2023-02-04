# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_03_172242) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "list_applications", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "listing_id", null: false
    t.string "status", default: "Pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_list_applications_on_listing_id"
    t.index ["user_id"], name: "index_list_applications_on_user_id"
  end

  create_table "listings", force: :cascade do |t|
    t.string "image"
    t.string "avaliable?"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "footage"
    t.integer "bedrooms"
    t.integer "bathrooms"
    t.string "description"
    t.string "date_available"
    t.string "property_owner"
    t.string "street"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.integer "creator_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "income"
    t.string "dob"
    t.boolean "employed?"
    t.string "employer"
    t.string "role", default: "user"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "list_applications", "listings"
  add_foreign_key "list_applications", "users"
end
