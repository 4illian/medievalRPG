class CreateMob < ActiveRecord::Migration[7.0]
  def change
    create_table :mobs do |t|
      t.string :name
      t.timestamps
    end
  end
end
