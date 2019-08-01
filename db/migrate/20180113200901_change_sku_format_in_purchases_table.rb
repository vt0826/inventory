class ChangeSkuFormatInPurchasesTable < ActiveRecord::Migration
  def change
    change_column :purchases, :sku, :string, array: true, default: []
  end
end
