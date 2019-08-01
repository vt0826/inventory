class AddCompanyIdToPurchases < ActiveRecord::Migration
  def change
    add_reference :purchases, :company, index: true, foreign_key: true
  end
end
