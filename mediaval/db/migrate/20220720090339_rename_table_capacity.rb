class RenameTableCapacity < ActiveRecord::Migration[7.0]
  def change
    rename_table :capicities, :capacities

  end
end
