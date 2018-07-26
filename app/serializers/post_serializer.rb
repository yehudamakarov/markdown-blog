class PostSerializer < ActiveModel::Serializer
    attributes :id, :title, :slug, :description, :content, :cover_image, :created_at, :updated_at
    has_many :tags
end