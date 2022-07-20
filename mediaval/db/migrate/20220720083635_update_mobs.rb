class UpdateMobs < ActiveRecord::Migration[7.0]
  def change
    add_column :mobs, :environment, :string
    add_column  :mobs, :boss, :integer
    add_reference :mobs, :capacity, index: true
  end
end
