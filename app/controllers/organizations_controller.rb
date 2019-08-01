class OrganizationsController < ApplicationController
  
  def new
    render :layout => "sign_in"
  end

  def show 
    @store=current_store.organization
    @phone=current_store.phone
    @address=current_store.street_name
    @city=current_store.city
    @state=current_store.state
    @zip_code=current_store.zip_code
  end

  def edit
    @email=current_store.email
    @store=current_store.organization
    @phone=current_store.phone
    @address=current_store.street_name
    @city=current_store.city
    @state=current_store.state
    @zip_code=current_store.zip_code
  end

  def create
    @organization=Organization.new(organization_params)
    if @organization.save
      flash[:notice]="Welcome please login"
      redirect_to new_session_path
    else
      flash[:alert]="*****Registration Failed*****"
      redirect_to :back
    end
  end

  def update
    @organization=current_store
    if @organization.update_attributes(organization_params)
      flash[:update]="*************** Update Succeed ***************"
    else
      flash[:update]="*************** Update failed ***************"
    end
    redirect_to :back
  end



  private

  def organization_params
    params.require(:organization).permit(:email, :password, :password_confirmation, :organization, :phone, :street_name, :city, :state, :zip_code )
  end

end
