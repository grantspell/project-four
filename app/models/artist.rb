class Artist < ApplicationRecord
    has_many :audios
    has_many :visuals
end
