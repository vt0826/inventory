class RemoveStoreAddressColumns < ActiveRecord::Migration
  def change
    remove_column :users, :store_address
  end
end
