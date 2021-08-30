Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get 'users/profile'
      namespace :users do
        get ':username/opinions', to: 'opinions#index', constraints: {username: /[^\/]+/}
      end
      resources :ping, only: [:index]
    end
  end

  namespace :api do
    namespace :v1 do
      get 'tags/search'
    end
  end
  namespace :api do
    namespace :v1 do
      post 'auths/token'
    end
  end

  namespace :api do
    namespace :v1 do
      resources :opinions
    end
  end
  namespace :api do
    namespace :v1 do
      resources :reactions, only: [:create]
      delete 'reactions', to: 'reactions#destroy'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
