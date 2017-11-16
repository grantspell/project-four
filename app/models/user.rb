class User < ApplicationRecord
    has_many :collections, :dependent => :destroy
    has_many :entries, through: :collection
end
