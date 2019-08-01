class DashboardsController < ApplicationController
  def index
    @organization_id=session[:store_id]
    @date = DateTime.now.utc
    @this_month_orders=Organization.find(@organization_id).orders.length
    @this_month_sales=Organization.find(@organization_id).orders.where('created_at >= ? and created_at <= ?', @date.beginning_of_month, @date.utc.end_of_month).sum('total_amount')
    
    @number_of_months = 0..11
    @sales_each_month = Array.new(12)
    @orders_each_month = Array.new(12)

    @number_of_months.to_a.reverse.each do |month_offset|
      @start_date = month_offset.months.ago.beginning_of_month
      @end_date = month_offset.months.ago.end_of_month
      @sales_each_month[month_offset]= Organization.find(@organization_id).orders.where('created_at >= ? and created_at <= ?', @start_date, @end_date).sum('total_amount')
      @orders_each_month[month_offset]= Organization.find(@organization_id).orders.where('created_at >= ? and created_at <= ?', @start_date, @end_date).length
    end

    @low_stock_alert = Array.new
    @low_stocks = Organization.find(@organization_id).supplies.where("quantity < 10")
    
    @arriving_purchases = Array.new
    @shipping_time = 14
    @arriving=Organization.find(@organization_id).purchases.where(status: 'Shipped')
    
  end

end
