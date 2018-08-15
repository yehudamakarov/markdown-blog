class TagsController < ApplicationController
    def index
        @tags = Tag.includes(post_tags: :post).all
        render json: @tags, status: :ok
    end
end
