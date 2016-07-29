class SessionsController < ApplicationController
  def new
    render :layout => "sign_in"
  end
  def create
    if params[:log_in] == "user"
      @user = User.authenticate(params[:id], params[:password])
      if @user
        session[:user_id] = @user.id
        session[:store_id] = @user.organization.id
#need to change to inventory store
        redirect_to organization_path(session[:store_id])
      else
        flash[:alert] = "There was a problem logging you in."
        redirect_to :back
      end
    else 
      @organization = Organization.authenticate(params[:email], params[:password])
      if @organization
        session[:store_id] = @organization.id
        redirect_to organization_path(session[:store_id])
      else
        flash[:alert] = "There was a problem logging you in."
        redirect_to :back

      end
    end
  end

  def destroy
    session[:store_id]=nil
    redirect_to "/"
  end

end
