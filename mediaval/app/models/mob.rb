class Mob < ApplicationRecord
    has_many :mobs_capacities
    has_many :capacities, through: :mobs_capacities
end