class AddEmployeeRoleToUsers < ActiveRecord::Migration
  def change
    add_column :users, :employee_role, :string
  end
end
