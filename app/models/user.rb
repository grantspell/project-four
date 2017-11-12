class User < ApplicationRecord
    has_many :collections
    has_many :entries, through: :collection
end
