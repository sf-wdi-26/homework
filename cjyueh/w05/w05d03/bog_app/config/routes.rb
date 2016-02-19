Rails.application.routes.draw do
  root to: 'creatures#index'

  resources :creatures, only: [:index, :new, :create, :show]
  #resources :creatures with :new is equivalent to adding:
  #get "/creatures/new", to: "creatures#new", as: "new_creature"
  #post "/creatures", to: "creatures#create"
  #get "/creatures/:id", to: "creatures#show", as: "creature"
end