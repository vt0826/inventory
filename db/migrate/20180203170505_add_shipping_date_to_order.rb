class AddShippingDateToOrder < ActiveRecord::Migration
  def change
    add_column :orders, :shipping_date, :datetime
  end
end
