Rails.application.routes.draw do
  resources :list_applications
  resources :users
  resources :listings
  resources :listing_infos
  # route to test your configuration

  # session routes
  get '/me', to: "users#show"
  post "/login", to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  post '/signup', to: "users#create"
  patch '/edit_profile', to: 'users#edit_profile'

  
 # application routes
 get 'my_applications/:user_id', to: 'list_applications#my_applications'
 post '/apply/:user_id/:listing_id', to: 'sessions#create_application'

end