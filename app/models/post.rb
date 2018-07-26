class Post < ApplicationRecord
    has_and_belongs_to_many :tags

    validates :title, presence: true, uniqueness: { case_sensitive: false }
    validates :description, presence: true
    
    def self.new_from_params(params)
        post = self.new do |post|
            post.title = params[:title]
            post.description = params[:description]
            post.content = params[:content]
            post.cover_image = params[:cover_image]
            post.tags = params[:tags]
        end
    end

    def tags=(tags)
        tags.each do |tag_string|
            tag = Tag.find_or_create_by(name: tag_string)
            self.tags << tag
        end
    end
end
