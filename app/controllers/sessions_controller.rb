class SessionsController < ApplicationController

    def create
        @user = User.first.authenticate(params[:password])
        
                
        if @user
            render json: @user
            session[:logged_in] = true
        else
            render json: {"key": "oops"}
        end
    end

    def sessiontest
        if session[:logged_in]
            render json: {"SUCCESSS": "SESSION IS TRUE"}
        else 
            render json: {"opps": "for session test"}
        end
    end
    
end
