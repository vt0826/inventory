class ContactsController < ApplicationController
  def new
    @contact=Contact.new
    @company_id=params[:company_id]
  end

  def edit
    @company_id=params[:company_id]
    @contact_id=params[:id]
    @contact=Contact.find(@contact_id)
  end

  def create 
    @contact=Contact.new(contact_params)
    if @contact.save  
      flash[:notice]="Entry successfully saved"
    else 
      flash[:error]="Entry failed. Please check the entery values"
    end
       redirect_to :back
  end


  def update
    @contact= Contact.find(params[:id])
    if @contact.update_attributes(contact_params)
      flash[:notice]="*inventory Updated*"
    else
      flash[:notice]="*Unable to Update inventory*"
    end
    redirect_to :back
  end


  def destroy
    @company_id=params[:company_id]
    @contact= Contact.find(params[:id])
    @contact.destroy
    redirect_to relationship_path(company_id: @company_id)
  end


  private

  def contact_params
    params.require(:contacts).permit(:first_name, :last_name, :phone_number, :cell_number, :email, :note, :department, :title, :company_id )
  end

end
