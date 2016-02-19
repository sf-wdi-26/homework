Rails.application.routes.draw do
  root to: 'creatures#index'

  resources :creatures
  # resources :creatures, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  #resources :creatures with :new is equivalent to adding:
  #get "/creatures/new", to: "creatures#new", as: "new_creature"
  #post "/creatures", to: "creatures#create"
  #get "/creatures/:id", to: "creatures#show", as: "creature"
  #get "/creatures/:id", to: "creatures#edit", as: "edit_creature"
  #patch "/creatures/:id", to: "creatures#update" AND put "/creatures/:id", to: "creatures#update"
  #delete "/creatures/:id", to: "creatures#destroy"
end