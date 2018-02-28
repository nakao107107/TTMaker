Rails.application.routes.draw do
  get 'make/table'
  get 'make/search'=>'make#search'
  get 'make/update'=>'make#update'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
