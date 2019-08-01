class AddArraysToTable < ActiveRecord::Migration
  def change
    change_column :orders, :quantity, :string, array: true, default: []
    change_column :orders, :sku, :string, array: true, default: []
    change_column :orders, :item_name, :string, array: true, default: []
    change_column :orders, :total_cost, :string, array: true, default: []

  end
end
