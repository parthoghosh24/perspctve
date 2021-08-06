Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'auths/token'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'sessions/signin'
      get 'sessions/signout'
      get 'sessions/verify'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'users/profile'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'opinions/index'
      get 'opinions/new'
      get 'opinions/create'
      get 'opinions/update'
      get 'opinions/show'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'reactions/create'
      get 'reactions/update'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
