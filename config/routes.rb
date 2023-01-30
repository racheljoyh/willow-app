Rails.application.routes.draw do
  resources :housing_infos
  resources :user_infos
  resources :applications
  resources :housings
  resources :users
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
end
