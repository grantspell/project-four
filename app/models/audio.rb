class Audio < ApplicationRecord
    belongs_to :artist
    belongs_to :collection
end
