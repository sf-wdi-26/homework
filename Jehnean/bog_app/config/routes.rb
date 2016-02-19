Rails.application.routes.draw do
  root to: 'creatures#index'
  resources :creatures
  # resources :creatures, only: [:index, :new, :create, :shsow, :edit, :update, :destroy]
end
