class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :sku
      t.string :item_name
      t.integer :quantity
      t.float :total_cost
      t.float :total_amount
      t.string :po_number
      t.string :status


      t.timestamps null: false
    end
  end
end
