class ChangeTotalCostFormatInPurchasesTable < ActiveRecord::Migration
  def change
    change_column :purchases, :total_cost, :string, array: true, default: []
  end
end
