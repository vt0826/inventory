class ChangeItemNameFormatInPurchasesTable < ActiveRecord::Migration
  def change
    change_column :purchases, :item_name, :string, array: true, default: []
  end
end
