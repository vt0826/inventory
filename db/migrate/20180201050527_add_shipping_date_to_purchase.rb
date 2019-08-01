class AddShippingDateToPurchase < ActiveRecord::Migration
  def change
    add_column :purchases, :shipping_date, :datetime
  end
end
