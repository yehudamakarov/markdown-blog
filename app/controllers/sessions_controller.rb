class SessionsController < ApplicationController

    def create
        @user = User.first.authenticate(params[:password])   
        if @user
            render json: @user
            session[:logged_in] = true
        else
            render json: { "errors": { "authentication": "failed" } }, status: 403
        end
    end

    def destroy
        session.clear
        render json: { "notice": { "logout": "success" } }
    end
end
