class CreateSupplies < ActiveRecord::Migration
  def change
    create_table :supplies do |t|
      t.string :product_name
      t.integer :sku
      t.string :supplier
      t.string :product_type
      t.string :brand
      t.float :buy_price

      t.timestamps null: false
    end
  end
end
