class Dialog < ApplicationRecord
    belongs_to :npc
    belongs_to :quete, optional: true
    has_many :dialog_contents
end