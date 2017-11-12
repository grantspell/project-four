class Collection < ApplicationRecord
    belongs_to :user
    has_many :entries
    has_many :visuals
    has_one :audio
end
