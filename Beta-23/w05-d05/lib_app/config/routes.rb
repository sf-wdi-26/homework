Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
    root to: 'users#index'

    get "/users", to: "users#index", as: "users"

    get "/users/new", to: "users#new", as: "new_user"


    post "/users", to: "users#create"

    get "/users/:id", to: "users#show"


end
