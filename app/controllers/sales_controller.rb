class SalesController < ApplicationController
  def index 
    @organization_id=session[:store_id]
    @sales=Organization.find(@organization_id).orders.all
  end

  def show
    @organization_id=session[:store_id]
    @order_id=params[:id]
    @total_amount=params[:total_amount]

    @sales=Organization.find(@organization_id).purchases.where(status: 'Complete')
    @sale=Order.find(@order_id)
    @company=Organization.find(@organization_id).companies.where(role: 'Supplier')
    @inventory=Organization.find(@organization_id).supplies
  end

  def shipment
    @organization_id=session[:store_id]
    @sales=Organization.find(@organization_id).orders.where(status: 'Shipped')
  end

  def return
    @organization_id=session[:store_id]
    @sales=Organization.find(@organization_id).orders.where(status: 'Returning')
  end

  def new
    @organization_id=session[:store_id]
    @company=Organization.find(@organization_id).companies.where(role: 'Customer')
    @inventory=Organization.find(@organization_id).supplies
    @so_number= generate_so_number
    $total_amount = 0
  end

  def add_row
    @organization_id=session[:store_id]
    @inventory=Organization.find(@organization_id).supplies
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

  def remove_row
    @row_id=params[:row_id]
  end

  def create
    @sale=Order.new(sale_params)
    @so_number= generate_so_number
    @organization_id=session[:store_id]

    if @sale.save  
      flash[:notice]="Entry successfully saved"

      (0...@sale.sku.length).each do |i|
        @inventory=Organization.find(@organization_id).supplies.where(sku: @sale.sku[i]).first
        @sale_quantity=@sale.quantity[i]  
        @new_quantity=@inventory.quantity.to_i - @sale_quantity.to_i
        @inventory.update_attributes(:quantity => @new_quantity )
      end

    else 
      flash[:error]="Entry failed. Please check the entery values"
    end
       redirect_to sales_path
  end

  def update
    @organization_id=session[:store_id]
    @sale=Order.find(params[:id])
    @sale.update_attributes(:status => params[:status])
    @sale.update_attributes(:shipping_date => Time.now) if params[:status]=='Shipped'
    @sale.update_attributes(:return_date => Time.now) if params[:status]=='Returning'
  
    if params[:status]=='Return Compeleted' 
      (0...@sale.sku.length).each do |i|
        @inventory=Organization.find(@organization_id).supplies.where(sku: @sale.sku[i]).first
        @sale_quantity=@sale.quantity[i]  
        @new_quantity=@inventory.quantity.to_i + @sale_quantity.to_i
        @inventory.update_attributes(:quantity => @new_quantity )
      end
    end
    redirect_to :back
  end

  def destroy
    @order= Order.find(params[:id])
    @order.destroy
    redirect_to :back
  end

  private
  
  def sale_params
    params.require(:sales).permit(:organization_id, :company_id, :status, :po_number, :total_amount, :sku=>[], :item_name=>[], :quantity=>[], :total_cost =>[])
  end



  def generate_so_number
    possible_values = '123456789'.split('')
    order_no = nil

    loop do
      order_no = Array.new(8){possible_values[rand(possible_values.size)]}.join
      order_no = "SO"+order_no
    break unless Purchase.exists?(:po_number => order_no)
    end
    order_no
  end

end
