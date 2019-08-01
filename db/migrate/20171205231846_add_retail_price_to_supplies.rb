class AddRetailPriceToSupplies < ActiveRecord::Migration
  def change
    add_column :supplies, :retail_price, :float
  end
end
