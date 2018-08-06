class TagSerializer < ActiveModel::Serializer
    attributes :id, :name, :slug, :title, :amountOfPosts

    def amountOfPosts
        object.posts.length
    end
    
end