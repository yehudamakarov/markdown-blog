Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  get '/sessiontest', to: 'sessions#sessiontest'

  resources :posts, only: [:create, :show, :index, :destroy]
end
