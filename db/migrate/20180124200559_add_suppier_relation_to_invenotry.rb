class AddSuppierRelationToInvenotry < ActiveRecord::Migration
  def change
    add_foreign_key :invenotries, :company_id
  end
end
