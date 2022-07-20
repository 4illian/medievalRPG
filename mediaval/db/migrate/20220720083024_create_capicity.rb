class CreateCapicity < ActiveRecord::Migration[7.0]
  def change
    create_table :capicities do |t|
      t.string :name
      t.integer :type
      t.integer :cooldown
      t.integer :damage, null: true
      t.integer :buff_duration, null: true
      t.integer :buff, null: true
      t.integer :protection, null: true
      t.integer :protection_duration, null: true
      t.integer :buff_type
      t.timestamps
    end
  end
end
