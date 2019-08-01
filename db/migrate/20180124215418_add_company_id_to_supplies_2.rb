class AddCompanyIdToSupplies2 < ActiveRecord::Migration
  def change
    add_reference :supplies, :company, index: true, foreign_key: true
  end
end
