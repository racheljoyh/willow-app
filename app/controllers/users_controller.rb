class UsersController < ApplicationController
skip_before_action :authorize, only: :create

    # /me route
  def show
    render json: @current_user
  end

  # /signup route
  def create
    user = User.create!(user_params)
      session[:user_id] = user.id 
      render json: user, status: :created
  end


  private

   def user_params
      params.permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
  end

end
