class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_store, :current_position
  include Rails.application.routes.url_helpers

  def current_store
  @current_store ||= Organization.find(session[:store_id]) if session[:store_id]
  end

  def current_position
    @current_position ||= User.find(session[:user_id]).position if session[:user_id]
  end


end
