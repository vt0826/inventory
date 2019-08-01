class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :address
      t.string :type
      t.string :website
      t.integer :phone
      t.string :email
      t.text :description

      t.timestamps null: false
    end
  end
end
