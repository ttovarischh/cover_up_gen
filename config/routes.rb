Rails.application.routes.draw do
  get 'controllername/main'
  get 'controllername/mainpage'
  resources :prototypes
  root 'controllername#main'
end
