class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :Companies, :type, :role
  end
end
