
Rails.application.routes.draw do
  
  root to: 'creatures#index'

  resources :creatures, [:index, :new, :create, :show, :edit, :update, :destroy]
end
