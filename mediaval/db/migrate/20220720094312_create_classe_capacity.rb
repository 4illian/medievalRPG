class CreateClasseCapacity < ActiveRecord::Migration[7.0]
  def change
    create_table :classe_capacities do |t|
      t.belongs_to :classe
      t.belongs_to :capacity
      t.timestamps
    end
  end
end
