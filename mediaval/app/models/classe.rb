class Classe < ApplicationRecord
    # has_many :capacities
    has_many :classe_capacities
    has_many :capacities, through: :classe_capacities
end
