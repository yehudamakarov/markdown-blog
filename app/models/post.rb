class Post < ApplicationRecord
    has_and_belongs_to_many :tags
    before_destroy { tags.clear }

    validates :title, presence: { message: "Don't forget to title your post!" }, uniqueness: { case_sensitive: false, message: "You already made a post with that name" }
    validates :description, presence: { message: "You should describe what your post is about." }
    
    def self.new_from_params(params)
        post = self.new do |post|
            post.title = params[:title].titlecase.strip
            post.slug = params[:title].downcase.split(' ').join('-')
            post.description = params[:description]
            post.content = params[:content]
            post.cover_image = params[:cover_image]
            post.tags = params[:tags]
        end
    end

    def update_from_params(params)
        self.tags.clear
        self.title = params[:title].titlecase.strip
        self.slug = params[:title].downcase.split(' ').join('-')
        self.description = params[:description]
        self.content = params[:content]
        self.cover_image = params[:cover_image]
        self.tags = params[:tags]
    end
    

    def tags=(tags)
        tags.each do |tag_string|
            tag = Tag.find_or_create_by(name: tag_string.downcase.strip) do |tag|
                tag.title = tag.name.titlecase
                tag.slug = tag.name.split(' ').join('-')
            end
            self.tags << tag
        end
    end
end
