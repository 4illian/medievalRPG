class CreateProgrssion < ActiveRecord::Migration[7.0]
  def change
    create_table :progrssions do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.boolean :status, default: :false
      t.timestamps
    end
  end
end
