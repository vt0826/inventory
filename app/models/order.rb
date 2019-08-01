class Order < ActiveRecord::Base
  belongs_to :company
  belongs_to :organization

  serialize :sku, Array
  serialize :item_name, Array
  serialize :total_cost, Array
  serialize :quantity, Array


end
