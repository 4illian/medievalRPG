class CreateMobsCapacity < ActiveRecord::Migration[7.0]
  def change
    create_table :mobs_capacities do |t|
      t.belongs_to :mob
      t.belongs_to :capacity
      t.timestamps
    end
  end
end
