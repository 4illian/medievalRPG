Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root to: 'user_creation#index'


  resources :games
  devise_for :users
  # get "user_creation", to: "user_creation#index"
  get "game_start", to: "game_start#index"
  resources :user_creation
  resources :game_start
  resources :combat
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
