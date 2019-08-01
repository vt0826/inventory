class AddOrganizationIdPurchaseTable < ActiveRecord::Migration
  def change
     add_reference :purchases, :organization, index: true, foreign_key: true
  end
end
