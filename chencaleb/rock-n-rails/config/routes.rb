Rails.application.routes.draw do
  get "/records", to: "records#index"

  get "/records/new", to: "records#new"

  post "/records", to: "records#create"

  get "/records/:id", to: "records#show", as: "record"

  delete "/records/:id", to: "records#destroy"

end
