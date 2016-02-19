Rails.application.routes.draw do
 root to: 'creatures#index'
 resource :creatures
# resource :creature, only: [:index, :new, :create, :show, :update, :destroy]

end
