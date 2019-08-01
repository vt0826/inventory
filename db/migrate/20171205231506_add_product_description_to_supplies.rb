class AddProductDescriptionToSupplies < ActiveRecord::Migration
  def change
    add_column :supplies, :product_description, :text
  end
end
