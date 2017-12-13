class Collection < ApplicationRecord
    belongs_to :user, :dependent => :destroy
    has_many :entries, :dependent => :destroy
    has_many :visuals, :dependent => :destroy
    has_one :audio, :dependent => :destroy
end
