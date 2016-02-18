Rails.application.routes.draw do
  # route to show all records 
  get "/records" => "records#index"
  # route to show new record form
  get "/records/new" => "records#new"
  # route to create a record in the database
  post "/records" => "records#create"
  # route to show a single message
  get "/records/:id" => "records#show", as: "record"

end
