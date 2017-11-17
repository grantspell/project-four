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

ActiveRecord::Schema.define(version: 20171117015904) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "artist_type"
    t.text "description"
    t.string "artist_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "audios", force: :cascade do |t|
    t.string "trackName"
    t.string "collectionName"
    t.string "previewUrl"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "collection_id"
    t.bigint "artist_id"
    t.string "artworkUrl100"
    t.string "artistName"
    t.index ["artist_id"], name: "index_audios_on_artist_id"
    t.index ["collection_id"], name: "index_audios_on_collection_id"
  end

  create_table "collections", force: :cascade do |t|
    t.string "title"
    t.text "mood_keywords", default: [], array: true
    t.boolean "publish_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_collections_on_user_id"
  end

  create_table "entries", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "collection_id"
    t.index ["collection_id"], name: "index_entries_on_collection_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password"
    t.string "user_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "visuals", force: :cascade do |t|
    t.string "title"
    t.string "visual_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "collection_id"
    t.bigint "artist_id"
    t.index ["artist_id"], name: "index_visuals_on_artist_id"
    t.index ["collection_id"], name: "index_visuals_on_collection_id"
  end

  add_foreign_key "audios", "artists"
  add_foreign_key "audios", "collections"
  add_foreign_key "collections", "users"
  add_foreign_key "entries", "collections"
  add_foreign_key "visuals", "artists"
  add_foreign_key "visuals", "collections"
end
