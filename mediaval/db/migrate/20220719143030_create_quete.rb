class CreateQuete < ActiveRecord::Migration[7.0]
  def change
    create_table :quetes do |t|
      t.string :name
      t.timestamps
    end
  end
end
