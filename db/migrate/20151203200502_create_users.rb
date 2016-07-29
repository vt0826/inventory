class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :store_name
      t.string :store_address
      t.string :password_hash 
      t.string :password_salt
      t.string :email
      t.timestamps null: false
    end
  end
end
