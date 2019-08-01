class ContactChangeCellType < ActiveRecord::Migration
  def change
    change_column(:contacts, :cell_number, :string)
  end
end
