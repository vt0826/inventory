class OrganizationsController < ApplicationController
   @@states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Mississippi','Missouri','Montana','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

  def new
    @states=@@states
    render :layout => "sign_in"
  end

  def edit
    @states=@@states
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
