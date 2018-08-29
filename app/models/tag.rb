class Tag < ApplicationRecord
    has_many :post_tags
    has_many :posts, through: :post_tags
    before_destroy :ensure_has_no_posts
    after_destroy :confirm_destroyed

    def ensure_has_no_posts        
        if self.posts.any?
            p "#{self.name} will not be destroyed it is still connected to other posts."
            throw :abort
        end
    end

    def confirm_destroyed
        p "#{self.name} destroyed." 
    end

    def update_amount_of_posts        
        post_count = self.posts.count
        self.update(amount_of_posts: post_count)
    end
end
