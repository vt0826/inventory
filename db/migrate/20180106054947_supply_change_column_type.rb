class SupplyChangeColumnType < ActiveRecord::Migration
  def change
   change_column(:supplies, :sku, :string)
  end
end
