class AddCompanyIdToOrders < ActiveRecord::Migration
  def change
    add_reference :orders, :company, index: true, foreign_key: true
    add_reference :orders, :organization, index: true, foreign_key: true
  end
end
