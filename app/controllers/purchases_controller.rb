class PurchasesController < ApplicationController
  def index
    @organization_id=session[:store_id]
    @purchases=Organization.find(@organization_id).purchases.where.any_of({status:  'Order Placed'}, {status: 'Shipped'}, {status: 'Delivered'})
  end
  
  def new
    @organization_id=session[:store_id]
    @company=Organization.find(@organization_id).companies.where(role: 'Supplier')
    @inventory=Organization.find(@organization_id).supplies
    @po_number= generate_po_number
    $total_amount = 0
  end

  def complete_index
    @organization_id=session[:store_id]
    @purchases=Organization.find(@organization_id).purchases.where(status: 'Complete')
  end

  def show
    @organization_id=session[:store_id]
    @purchase_id=params[:id]
    @total_amount=params[:total_amount]

    @purchases=Organization.find(@organization_id).purchases.where(status: 'Complete')
    @purchase=Purchase.find(@purchase_id)
    @company=Organization.find(@organization_id).companies.where(role: 'Supplier')
    @inventory=Organization.find(@organization_id).supplies
  end

  def add_row
    @organization_id=session[:store_id]
    @inventory=Organization.find(@organization_id).supplies
  end
  
  def remove_row
    @row_id=params[:row_id]

  end

  def add_info
    @row=params[:row] 
    @name=params[:name]
    @organization_id=session[:store_id]
    @company=Organization.find(@organization_id).companies
    @inventory=Organization.find(@organization_id).supplies
  end

  def add_info_name
    @row=params[:row] 
    @name=params[:name]
    @organization_id=session[:store_id]
    @inventory=Organization.find(@organization_id).supplies
  end
  
  def total_amount
    @total_cost=params[:total_cost]
    $total_amount = $total_amount.to_i + @total_cost.to_i
    @total_amount = $total_amount
  end
 
  def create
    @purchase=Purchase.new(purchase_params)
    @po_number= generate_po_number
    if @purchase.save  
      flash[:notice]="Entry successfully saved"
    else 
      flash[:error]="Entry failed. Please check the entery values"
    end
       redirect_to purchases_path
  end
  
  def edit
    @purchase_id=params[:id]
    @purchase=Purchase.find(@purchase_id)
    @organization_id=session[:store_id]
    @company=Organization.find(@organization_id).companies.where(role: 'Supplier')
  end
  
  def update
    @purchase=Purchase.find(params[:id])
    @purchase.update_attributes(:status => params[:status])
    @purchase.update_attributes(:shipping_date => Time.now) if params[:status]=='Shipped'

    redirect_to :back
  end
  
  def add_complete
    @purchase=Purchase.find(params[:id])
    @organization_id=session[:store_id]
    @purchase.update_attributes(:status => 'Complete')

    (0...@purchase.sku.length).each do |i|
      @inventory=Organization.find(@organization_id).supplies.where(sku: @purchase.sku[i]).first
      @new_quantity=@inventory.quantity + @purchase.quantity[i].to_i
      @inventory.update_attributes(:quantity => @new_quantity)
    end

    redirect_to :back
  end

  def destroy
    @purchase= Purchase.find(params[:id])
    @purchase.destroy
    redirect_to :back
  end

  private

  def purchase_params
    params.require(:purchases).permit(:organization_id, :company_id, :status, :po_number, :total_amount, :sku=>[], :item_name=>[], :quantity=>[], :total_cost =>[])
  end

  def update_params
    params.require(:purchases).permit(:status)
  end

  def generate_po_number
    possible_values = '123456789'.split('')
    order_no = nil

    loop do
      order_no = Array.new(8){possible_values[rand(possible_values.size)]}.join
      order_no = "PO"+order_no
    break unless Purchase.exists?(:po_number => order_no)
    end
    order_no
  end
end
