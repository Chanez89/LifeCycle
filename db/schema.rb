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

ActiveRecord::Schema.define(version: 2021_12_03_195158) do

  create_table "bike_from_users", force: :cascade do |t|
    t.integer "user_id"
    t.string "brand"
    t.integer "employee_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "bikes", force: :cascade do |t|
    t.string "brand"
    t.string "name"
    t.string "style"
    t.string "img_url"
    t.integer "price"
    t.integer "weight_lb"
    t.integer "size_cm"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "full_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "service_tickets", force: :cascade do |t|
    t.integer "employee_id"
    t.integer "bike_from_user_id"
    t.integer "user_id"
    t.integer "phone_number"
    t.string "service_type"
    t.date "input_date"
    t.date "worktime"
    t.integer "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
