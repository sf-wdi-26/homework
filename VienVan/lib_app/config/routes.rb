Rails.application.routes.draw do
    root to: "users#index"

    get '/users' => "users#index"

    get '/users/new' => "users#new"
end
