class Artefact < ApplicationRecord
    has_many :players
    enum bonus_type: [:attack, :protection, :buff]
end