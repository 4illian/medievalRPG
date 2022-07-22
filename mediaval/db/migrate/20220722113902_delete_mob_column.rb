class DeleteMobColumn < ActiveRecord::Migration[7.0]
  def change
    remove_reference :mobs, :capacity, index: :true
  end
end
