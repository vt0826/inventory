class RemoveEmployeeRoleUsers < ActiveRecord::Migration
  def change
    remove_column :users, :employee_role
  end
end
