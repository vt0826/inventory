class ChangeQuantityNameFormatInPurchasesTable < ActiveRecord::Migration
  def change
    change_column :purchases, :quantity, :integer, array: true, default: []
  end
end
