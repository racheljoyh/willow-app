class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create
   
  # /login
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      
      render json: user, status: :created
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
   
  end

  # /logout 
  def destroy
    session.delete(:user_id)
    head :no_content
  end

  # /apply/:user_id/:listing_id
  def create_application
    application = ListApplication.create(:user_id => params[:user_id], :listing_id => params[:listing_id], status: "Pending")
    render json: application, status: :created
  end




  

end
