class CreateDialog < ActiveRecord::Migration[7.0]
  def change
    create_table :dialogs do |t|
      t.references :quete, null: true, foreign_key: true
      t.references :npc, null: false, foreign_key: true
      t.timestamps
    end
  end
end
