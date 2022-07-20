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

ActiveRecord::Schema[7.0].define(version: 2022_07_20_110710) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artefacts", force: :cascade do |t|
    t.string "name"
    t.string "bonnus"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "capacities", force: :cascade do |t|
    t.string "name"
    t.integer "type_capacity"
    t.integer "cooldown"
    t.integer "damage"
    t.integer "buff_duration"
    t.integer "buff"
    t.integer "protection"
    t.integer "protection_duration"
    t.integer "buff_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "classe_capacities", force: :cascade do |t|
    t.bigint "classe_id"
    t.bigint "capacity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["capacity_id"], name: "index_classe_capacities_on_capacity_id"
    t.index ["classe_id"], name: "index_classe_capacities_on_classe_id"
  end

  create_table "classes", force: :cascade do |t|
    t.string "name"
    t.integer "capacity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dialog_contents", force: :cascade do |t|
    t.bigint "dialog_id", null: false
    t.text "content"
    t.integer "order_dialog"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dialog_id"], name: "index_dialog_contents_on_dialog_id"
  end

  create_table "dialogs", force: :cascade do |t|
    t.bigint "quete_id"
    t.bigint "npc_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["npc_id"], name: "index_dialogs_on_npc_id"
    t.index ["quete_id"], name: "index_dialogs_on_quete_id"
  end

  create_table "mobs", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "environment"
    t.integer "boss"
    t.bigint "capacity_id"
    t.index ["capacity_id"], name: "index_mobs_on_capacity_id"
  end

  create_table "npcs", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "classe_id"
    t.bigint "artefact_id"
    t.string "name"
    t.index ["artefact_id"], name: "index_players_on_artefact_id"
    t.index ["classe_id"], name: "index_players_on_classe_id"
    t.index ["user_id"], name: "index_players_on_user_id"
  end

  create_table "progressions", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.boolean "status", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "quete_id"
    t.index ["quete_id"], name: "index_progressions_on_quete_id"
    t.index ["user_id"], name: "index_progressions_on_user_id"
  end

  create_table "quetes", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "dialog_contents", "dialogs"
  add_foreign_key "dialogs", "npcs"
  add_foreign_key "dialogs", "quetes"
  add_foreign_key "players", "users"
  add_foreign_key "progressions", "users"
end
