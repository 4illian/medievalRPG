class ChangeNameTable < ActiveRecord::Migration[7.0]
  def change
    rename_table :progrssions, :progressions
  end
end
