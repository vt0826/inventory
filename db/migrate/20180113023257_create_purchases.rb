class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.string :sku
      t.string :item_name
      t.integer :quantity
      t.float :total_cost

      t.timestamps null: false
    end
  end
end
