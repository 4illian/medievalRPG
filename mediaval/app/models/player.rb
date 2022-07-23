class Player < ApplicationRecord
    belongs_to :user
    belongs_to :classe
    belongs_to :artefact, optional: true
end