class ChangeQuantityArray1 < ActiveRecord::Migration
  def change
   change_column :purchases, :quantity, :text, array: true
  end
end
