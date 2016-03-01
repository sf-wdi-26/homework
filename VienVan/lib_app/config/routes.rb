Rails.application.routes.draw do
    root to: "users#index"

    get '/users' => "users#index"

    get '/users/new' => "users#new", as: "new_user"

    post '/users' => "users#create"

    get 'users/:id' => "users#show"

    get '/sign-in' => "sessions#new"

    post '/sessions' => "sessions#create"

    get '/libraries' => "libraries#index"

    get '/libraries/new' => "libraries#new"

    post '/libraries' => "libraries#create"

    get '/users/:user_id/libraries', to: "library_users#index", as: "user_libraries"
    
    post '/libraries/:library_id/users', to: "library_users#create", as: "library_users"

end
