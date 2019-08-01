class Company < ActiveRecord::Base
  has_many :contacts 
  has_many :supplies
  has_many :purchases
  has_many :orders

  validates_presence_of :name, :role, :address, :website, :phone, :email
  before_save :titlelize_names

  def titlelize_names
    @company=[ "name", "role", "address"]

    @company.each do |name|
      self.send("#{name}=" , send(name).titleize)
    end
  end

end
