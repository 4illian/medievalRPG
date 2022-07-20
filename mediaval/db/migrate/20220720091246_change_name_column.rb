class ChangeNameColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :capacities, :type, :type_capacity
  end
end
