Rails.application.routes.draw do
  resources :games
  devise_for :users
  get "user_creation", to: "user_creation#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
