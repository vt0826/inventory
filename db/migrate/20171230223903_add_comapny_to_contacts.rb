class AddComapnyToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :company, :reference
  end
end
