Rails.application.routes.draw do

  namespace :api do
    get "/users", to: "users#index", as: "users"
    get "/artists", to: "artists#index", as: "artists"
    get "/collections", to: "collections#index", as: "collections"
  end

  

end
