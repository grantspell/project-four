Rails.application.routes.draw do

  # users
  namespace :api do
    get "/users", to: "users#index", as: "users"
    post "/users", to: "users#create"
    get "/users/:username", to: "users#show", as: "user"
    put "/users/:id", to: "users#update"
    patch "/users/:id", to: "users#update"
    delete "/users/:id", to: "users#destroy"
  end

  # collections
  namespace :api do
    get "/collections", to: "collections#index", as: "collections"
    get "/collections/:user_id", to: "collections#userCollections"
    get "/collections/:user_id/:collection_id", to: "collections#show", as: "collection"
    post "/collections/:user_id", to: "collections#create"
  end

  # collection content [visual, audio, entry]
  namespace :api do
    get "/content/:collection_id/v", to: "contents#visual", as: "visuals"
    get "content/:collection_id/a", to: "contents#audio", as: "audios"
    get "content/:collection_id/e", to: "contents#entry", as: "entries"
  end
  
  # artists
  namespace :api do
    get "/artists", to: "artists#index", as: "artists"
    get "/artists/:id", to: "artists#show", as: "artist"
    get "/artists/:artist_id/artistry", to: "artists#artistry", as: "artistry"
    get "/artists/:artist_id/song", to: "artists#show_song", as: "song"
  end

end
