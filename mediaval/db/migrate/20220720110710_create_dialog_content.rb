class CreateDialogContent < ActiveRecord::Migration[7.0]
  def change
    create_table :dialog_contents do |t|
      t.references :dialog, null: false, foreign_key: true
      t.text :content, null: true
      t.integer :order_dialog
      t.timestamps
    end
  end
end
