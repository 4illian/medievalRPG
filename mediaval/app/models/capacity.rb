class Capacity < ApplicationRecord
    has_many :classe_capacities
    has_many :mobs_capacities
    has_many :mobs, :through => :mobs_capacities, :source => :mob
    has_many :classes, :through => :classe_capacities, :source => :classe
    enum type_capacity: [:attack, :protection, :buff]
end