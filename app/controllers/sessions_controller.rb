class SessionsController < ApplicationController

    def create
        @user = User.first
        correct_email = @user.email == params[:email].downcase
        if !correct_email
            return render json: {emailError: true}, status: 403
        end
        @user = @user.authenticate(params[:password])   
        if @user
            render json: @user, status: 200
            session[:logged_in] = true
        else
            render json: {emailError: false, passwordError: true} , status: 403
        end
    end

    def destroy
        session.clear
        render json: {logged_out: true}
    end
end
