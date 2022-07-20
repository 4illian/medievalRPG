class CreateArtefact < ActiveRecord::Migration[7.0]
  def change
    create_table :artefacts do |t|
      t.string :name
      t.string :bonnus
      t.timestamps
    end
  end
end
