class Contact < ActiveRecord::Base
  belongs_to :company
  before_save :titlelize_names

  def titlelize_names
    @inventory=[ "first_name", "last_name", "department", "title"]

    @inventory.each do |name|
      self.send("#{name}=" , send(name).titleize)
    end
  end

end
