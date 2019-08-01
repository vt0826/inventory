class RelationshipsController < ApplicationController
  def new
    @comapny=Company.new
  end
  
  def index
    @organization_id=session[:store_id]
    @company=Organization.find(@organization_id).companies
    @supplier=Company.order(:name).where("name like ?") #"%#{params[:term]}%")
  end

  def show
    @organization_id=session[:store_id]
    @company_id=params[:company_id]
    @company=Company.find(@company_id)
    @contact=Organization.find(@organization_id).companies.find(@company_id).contacts
  end

  def edit
    @company_id=params[:id]
    @company=Company.find(@company_id)
  end

  def create 
    @company=Company.new(company_params)
   # @contact=Contact.new(contact_params)
    if @company.save || @contact.save  
      flash[:notice]="Entry successfully saved"
    else 
      flash[:error]="Entry failed. Please check the entery values"
    end
       redirect_to :back
  end

  def update
    @company= Company.find(params[:id])
    if @company.update_attributes(company_params)
      flash[:notice]="*inventory Updated*"
    else
      flash[:notice]="*Unable to Update inventory*"
    end
    redirect_to :back
  end

  def destroy
    @company= Company.find(params[:id])
    @company.destroy
    redirect_to relationships_path
  end

 private

  def company_params
    params.require(:companies).permit(:name, :role, :address, :website, :email, :description, :phone, :organization_id )
  end

end
