class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    before_action :authorize

    private

    def render_not_found_response(exception)
      render json: { error: "#{exception.model} not found"}, status: :not_found
    end
  
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end  

    def authorize 
        @current_user = User.find_by(id: session[:user_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    def admin?
      @current_user.role == "admin"
    end

  def check_if_admin
    if admin?
      true
    else
      render json: {error: "You do not have access" } 
    end
  end

end
