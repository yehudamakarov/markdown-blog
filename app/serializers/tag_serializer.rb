class TagSerializer < ActiveModel::Serializer
    attributes :id, :name, :slug, :title
end