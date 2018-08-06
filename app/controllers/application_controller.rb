class ApplicationController < ActionController::API
    def require_login
        return head(:forbidden) unless session[:logged_in]
    end
end
