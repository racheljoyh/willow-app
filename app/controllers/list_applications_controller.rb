class ListApplicationsController < ApplicationController

  # my_applications/:user_id
  def my_applications
    applications = ListApplication.all.where(:user_id => params[:user_id]).order(id: :desc)
    render json: applications, status: :ok 
  end
  
end
