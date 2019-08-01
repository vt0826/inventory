class Supplies < ActiveRecord::Migration
  def change
    add_reference :supplies, :organization, index: true, foreign_key: true
  end
end
