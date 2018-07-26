class PostsController < ApplicationController
    def create
        if @post = Post.create_from_params(post_params)
            render json: @post, status: 201
        else
            render json: @post, status: 422
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
