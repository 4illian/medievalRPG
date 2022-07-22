class MofidifyArtefact < ActiveRecord::Migration[7.0]
  def change
    remove_column :artefacts, :bonnus
    add_column :artefacts, :bonus, :integer
    add_column :artefacts, :bonus_type, :integer
  end
end
