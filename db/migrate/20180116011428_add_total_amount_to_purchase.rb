class AddTotalAmountToPurchase < ActiveRecord::Migration
  def change
    add_column :purchases, :total_amount, :float
  end
end
