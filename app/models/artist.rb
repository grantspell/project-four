class Artist < ApplicationRecord
    has_many :audios, :dependent => :destroy
    has_many :visuals, :dependent => :destroy
end
