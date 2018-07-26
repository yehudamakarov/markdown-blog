class PostsController < ApplicationController
    def create
        @post = Post.new_from_params(post_params)
        if @post.save
            render json: @post, status: 201
        else
            render json: @post.errors, status: :unprocessable_entity
        end  
    end

    def show
    end
    
    def index
    end

    def destroy
    end

    private

    def post_params
        params.require(:post).permit(:title, :description, :content, :cover_image, tags: [])
    end
    
end
