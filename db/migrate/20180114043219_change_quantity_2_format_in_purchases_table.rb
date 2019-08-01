class ChangeQuantity2FormatInPurchasesTable < ActiveRecord::Migration
  def change
    change_column :purchases, :quantity, :integer, array: true, default: []
  end
end
