class User < ActiveRecord::Base

  belongs_to :organization

  attr_accessor :password
  validates_presence_of :first_name, :last_name, :store_name, :password, :employee_id, :address, :city, :state, :zip_code, :position


  validates_confirmation_of :password
  before_save :encrypt_password

  def encrypt_password
    self.password_salt = BCrypt::Engine.generate_salt
    self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
  end


   def self.authenticate(employee_id, password)
    user = User.where(employee_id: employee_id).first
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end
end
