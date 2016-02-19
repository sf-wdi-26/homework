Rails.application.routes.draw do
 get "/posts", to:"posts#index"
 post "/posts", to:"posts#create"
 get "/posts/new", to:"posts#new", as: "new_post"
 get "/posts/:id/edit", to:"posts#edit", as: "edit_post"
 get "/posts/:id",  to:"posts#show", as: "post"
 patch "/posts/:id", to:"posts#update"
 delete "/posts/:id", to:"posts#destroy"

end
