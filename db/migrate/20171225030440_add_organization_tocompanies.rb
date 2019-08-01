class AddOrganizationTocompanies < ActiveRecord::Migration
  def change
      add_reference :companies, :organization, index: true, foreign_key: true
  end
end
