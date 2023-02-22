Rails.application.routes.draw do
  resources :list_applications
  resources :users
  resources :listings
  # route to test your configuration



  # session routes
  get '/me', to: "users#show"
  post "/login", to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  post '/signup', to: "users#create"

  
 # application routes
 get 'my_applications/:user_id', to: 'list_applications#my_applications'
 post '/apply/:user_id/:listing_id', to: 'sessions#create_application'
 delete 'my_applications/:user_id/:id', to: 'list_applications#delete_application'


 # listing routes
 get 'my_listings/all', to: 'listings#user_listings'
 
get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end