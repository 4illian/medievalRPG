class Capacity < ApplicationRecord
    has_many :classe_capacities
    has_many :classes, :through => :classe_capacities, :source => :classe
    enum type_capacity: [:attack, :protection, :buff]
end