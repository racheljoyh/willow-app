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


  # listing routes

  get '/rentals', to: 'listings#rentals_index'
  get '/homes', to: 'listings#homes_index'
 

end