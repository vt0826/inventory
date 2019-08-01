class Supply < ActiveRecord::Base
  belongs_to :organization
  belongs_to :company

  validates_presence_of :sku, :product_name, :company_id, :product_type, :brand, :buy_price, :retail_price, :quantity
  validates :sku, uniqueness: true
  before_save :titlelize_names

  def titlelize_names
    @inventory=[ "product_name", "product_type", "brand"]

    @inventory.each do |name|
      self.send("#{name}=" , send(name).titleize)
    end
  end

end
