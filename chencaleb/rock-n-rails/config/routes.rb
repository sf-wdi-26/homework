Rails.application.routes.draw do
  get '/records' => "records#index"

  get '/records/new' => "records#new"

  get '/records' => "records#create"

  get 'records/:id' => "records#show", as: "record"

end
