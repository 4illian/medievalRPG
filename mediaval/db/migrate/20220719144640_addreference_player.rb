class AddreferencePlayer < ActiveRecord::Migration[7.0]
  def change
    add_reference :players, :classe, index: true
  end
end
