class AddCompanyIdToSupplies < ActiveRecord::Migration
  def change
    add_foreign_key :supplies, :company_id, :integer
  end
end
