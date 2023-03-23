Rails.application.routes.draw do
  get 'controllername/main'
  get 'controllername/mainpage'
  resources :prototypes
  root 'controllername#main'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
