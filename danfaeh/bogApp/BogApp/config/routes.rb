Rails.application.routes.draw do
 
  root to: "creatures#index"

  resources :creatures

  # get "/login", to: "creatures#new"

  # post "/creatures", to: "creatures#create"

  # delete "/creatures", to: "creatures#destroy"

  # get "/sign_up", to: "users#new", as: "sign_up"

  # resources :users, only: [:new, :create, :show, :index]

  # get "*path" => "welcome#index"

end
