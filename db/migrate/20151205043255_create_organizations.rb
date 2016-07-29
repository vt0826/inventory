class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.string :email
      t.string :password_hash
      t.string :password_salt
      t.string :organization
      t.string :phone
      t.string :street_name
      t.string :city
      t.text :state
      t.string :zip_code

      t.timestamps null: false
    end
  end
end

