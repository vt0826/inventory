class ChangeQuantityArray2 < ActiveRecord::Migration
  def change
    change_column :purchases, :quantity, :integer, array: true
  end
end
