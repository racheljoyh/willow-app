class UsersController < ApplicationController
  skip_before_action :authorize, only: :create
  before_action :check_if_admin, only: :index

  # /users - allows admin access to all users
  def index
    users = User.all
    render json: users, status: :ok
  end


    # /me route
  def show
    render json: @current_user
  end

  # /signup route
  def create
    user = User.create!(user_signup_params)
      session[:user_id] = user.id 
      render json: user, status: :created
  end

  # 
  def edit_profile 
    @current_user.update!(user_params)
    render json: @current_user, status: :accepted
  end


  private

   def user_params
      params.permit(:first_name, :last_name, :username, :email,:income, :dob, :employed?, :employer)
  end

  def user_signup_params 
    params.permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
  end

end
