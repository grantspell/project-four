Rails.application.routes.draw do

  namespace :api do
    get "/users", to: "users#index", as: "users"
    post "/users", to: "users#create"
    get "/users/:username", to: "users#show", as: "user"
    put "/users/:id", to: "users#update"
    patch "/users/:id", to: "users#update"
    delete "/users/:id", to: "users#destroy"
  end

  namespace :api do
    get "/collections", to: "collections#index", as: "collections"
    get "/collections/:user_id", to: "collections#show"
  end
  
  namespace :api do
    get "/artists", to: "artists#index", as: "artists"
  end

end
