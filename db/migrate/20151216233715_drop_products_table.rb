class DropProductsTable < ActiveRecord::Migration
  def change
    def up
      drop_table :users
    end

    def down
      raise ActiveRecord::IrreversibleMigration
    end
  end
end
