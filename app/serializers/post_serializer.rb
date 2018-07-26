class PostSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :content, :cover_image, :created_at, :updated_at
    has_many :tags
end