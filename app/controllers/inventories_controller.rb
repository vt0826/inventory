class InventoriesController < ApplicationController
  
  def index
    @organization_id=session[:store_id]
    @supply=Organization.find(@organization_id).supplies
  #  @inventory= Supply.all
  #  @inventory= Supply.new

  end

  def new
    @inventory=Supply.new
    @organization_id=session[:store_id]
    @company=Organization.find(@organization_id).companies.where(role: 'Supplier')
  end

  def show
    @inventory_id=params[:id]
    @inventory=Supply.find(@inventory_id)
    
  end

  def create 
    @inventory=Supply.new(inventory_params)
    if @inventory.save  
      flash[:notice]="Entry successfully saved"
    else 
      flash[:error]="Entry failed. Please check the entery values"
    end
       redirect_to :back

  end




  def edit
    @inventory_id=params[:id]
    @inventory=Supply.find(@inventory_id)
    @organization_id=session[:store_id]
    @company=Organization.find(@organization_id).companies.where(role: 'Supplier')
 
     
    respond_to do |format|
      format.js
    end

  end
  
  def update
    @inventory= Supply.find(params[:id])
    if @inventory.update_attributes(inventory_params)
      flash[:notice]="*inventory Updated*"
    else
      flash[:notice]="*Unable to Update inventory*"
    end
    redirect_to inventories_path
  end

  def destroy
    @inventory= Supply.find(params[:id])
    @inventory.destroy
    redirect_to :inventories
  end
  
  private

  def inventory_params
    params.require(:inventories).permit(:product_name, :sku, :company_id, :product_type, :brand, :product_description, :buy_price, :retail_price, :organization_id, :quantity )
  end


end
