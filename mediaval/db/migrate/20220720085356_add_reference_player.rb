class AddReferencePlayer < ActiveRecord::Migration[7.0]
  def change
    add_reference :players, :artefact, index: true
  end
end
