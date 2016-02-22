Rails.application.routes.draw do
  root to: "users#index"

  # get "/users", to: "users#index", as: "users"
 
  # get "/users/new", to: "users#new", as: "new_user"

  # post "/users", to: "users#create"

  resources :users 
  
  get "/libraries", to: "libraries#index"

  get "/users/:user_id/libraries", to: "library_users#index", as: "user_libraries"
  

end
