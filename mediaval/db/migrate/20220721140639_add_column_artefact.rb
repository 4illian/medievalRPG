class AddColumnArtefact < ActiveRecord::Migration[7.0]
  def change
    add_column :artefacts, :drop, :integer
  end
end
