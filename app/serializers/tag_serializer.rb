class TagSerializer < ActiveModel::Serializer
    attributes :id, :name, :slug, :title, :amountOfPosts
# get rid of this. make a column for each tag to have an amount_of_posts integer.
    def amountOfPosts
        object.amount_of_posts
    end
    
end