class ChangeQuantityArray3 < ActiveRecord::Migration
  def change
    change_column :purchases, :quantity, :string, array: true, default: []
  end
end
