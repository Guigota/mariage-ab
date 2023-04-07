Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"

  resources :guests, only: %i[new create edit update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/adresse', to: 'pages#adresse'
  get '/programme', to: 'pages#programme'

end
