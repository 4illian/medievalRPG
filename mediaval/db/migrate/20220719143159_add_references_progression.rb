class AddReferencesProgression < ActiveRecord::Migration[7.0]
  def change
    add_reference :progressions, :quete, index: true 

  end
end
