class AddPoNmuberToPurchases < ActiveRecord::Migration
  def change
    add_column :purchases, :po_number, :string
  end
end
