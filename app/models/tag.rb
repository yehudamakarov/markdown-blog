class Tag < ApplicationRecord
    has_and_belongs_to_many :posts
    before_destroy { raise "Still associated to other posts." if self.posts.any? }
end
