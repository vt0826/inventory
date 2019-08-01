class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :title
      t.string :department
      t.string :phone_number
      t.string :cell_number
      t.text :note

      t.timestamps null: false
    end
  end
end
