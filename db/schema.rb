# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180206000005) do

  create_table "companies", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.string   "role"
    t.string   "website"
    t.string   "phone"
    t.string   "email"
    t.text     "description"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "organization_id"
  end

  add_index "companies", ["organization_id"], name: "index_companies_on_organization_id"

  create_table "contacts", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "title"
    t.string   "department"
    t.string   "phone_number"
    t.string   "cell_number"
    t.text     "note"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "company_id"
  end

  add_index "contacts", ["company_id"], name: "index_contacts_on_company_id"

  create_table "orders", force: :cascade do |t|
    t.string   "sku",             default: "--- []\n"
    t.string   "item_name",       default: "--- []\n"
    t.string   "quantity",        default: "--- []\n"
    t.string   "total_cost",      default: "--- []\n"
    t.float    "total_amount"
    t.string   "po_number"
    t.string   "status"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.datetime "shipping_date"
    t.integer  "company_id"
    t.integer  "organization_id"
    t.datetime "return_date"
  end

  add_index "orders", ["company_id"], name: "index_orders_on_company_id"
  add_index "orders", ["organization_id"], name: "index_orders_on_organization_id"

  create_table "organizations", force: :cascade do |t|
    t.string   "email"
    t.string   "password_hash"
    t.string   "password_salt"
    t.string   "organization"
    t.string   "phone"
    t.string   "street_name"
    t.string   "city"
    t.text     "state"
    t.string   "zip_code"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "purchases", force: :cascade do |t|
    t.string   "sku",             default: "--- []\n"
    t.string   "item_name",       default: "--- []\n"
    t.string   "quantity",        default: "--- []\n"
    t.string   "total_cost",      default: "--- []\n"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.float    "total_amount"
    t.string   "po_number"
    t.string   "status"
    t.integer  "company_id"
    t.integer  "organization_id"
    t.datetime "shipping_date"
  end

  add_index "purchases", ["company_id"], name: "index_purchases_on_company_id"
  add_index "purchases", ["organization_id"], name: "index_purchases_on_organization_id"

  create_table "supplies", force: :cascade do |t|
    t.string   "product_name"
    t.string   "sku"
    t.string   "supplier"
    t.string   "product_type"
    t.string   "brand"
    t.float    "buy_price"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.text     "product_description"
    t.float    "retail_price"
    t.integer  "organization_id"
    t.integer  "quantity"
    t.integer  "company_id"
  end

  add_index "supplies", ["company_id"], name: "index_supplies_on_company_id"
  add_index "supplies", ["organization_id"], name: "index_supplies_on_organization_id"

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "store_name"
    t.string   "password_hash"
    t.string   "password_salt"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "employee_id"
    t.string   "phone"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.string   "zip_code"
    t.string   "position"
    t.integer  "organization_id"
  end

  add_index "users", ["organization_id"], name: "index_users_on_organization_id"

end
