Rails.application.routes.draw do
  get '/purchases/complete_index' => 'purchases#complete_index'
  get '/purchases/complete' => 'purchases#complete' 
  get 'purchases/shipment' => 'purchases#shipment'
  get 'sales/shipment' => 'sales#shipment' 
  get '/sales/return' => 'sales#return' 

  resources :users
  resources :organizations
  resources :sessions
  resources :inventories
  resources :relationships
  resources :dashboards
  resources :contacts
  resources :purchases
  resources :sales

  get '/' => 'sessions#new'

  post '/log_in' => 'session#create'
  post '/purchases/add_row' => 'purchases#add_row'
  post '/purchases/remove_row' => 'purchases#remove_row'
  post '/purchases/add_info' => 'purchases#add_info'
  post '/purchases/add_info_name' => 'purchases#add_info_name'
  post '/purchases/total_amount' => 'purchases#total_amount'
  post '/purchases/add_complete' => 'purchases#add_complete' 

  post '/sales/add_row' => 'sales#add_row'
  post '/sales/remove_row' => 'sales#remove_row'
  post '/sales/add_info' => 'sales#add_info'
  post '/sales/add_info_name' => 'sales#add_info_name'
  post '/sales/total_amount' => 'sales#total_amount'


  delete "/log_out" => "sessions#destroy"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
