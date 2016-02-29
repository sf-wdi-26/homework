Rails.application.routes.draw do

  root to: 'creatures#index'
  resources :creatures

  # why doesnt this work?:
  # get 'creatures/new', to: 'creatures#new'

  # post '/creatures', to: 'creatures#create'

  # get '/creatures/:id', to: 'creatures#show', 

  # get '/creatures/:id', to: 'creatures#edit'

  # put '/creatures/:id', to: 'creatures#update'
  
  # delete '/creatures/:id', to: 'creatures#destroy', as: 'creature'

end
