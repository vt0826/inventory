class AddReturnDateToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :return_date, :datetime
  end
end
