class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_store
  
  def current_store
  @current_store ||= Organization.find(session[:store_id]) if session[:store_id]
  end

end
