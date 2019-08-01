class Organization < ActiveRecord::Base
  
  has_many :users
  has_many :supplies
  has_many :companies
  has_many :purchases
  has_many :orders

  attr_accessor :password
  validates_presence_of :email, :password, :organization, :phone, :street_name, :city, :state, :zip_code
  validates :email, uniqueness: true
  validates_confirmation_of :password
  before_save :encrypt_password

  def encrypt_password
    self.password_salt = BCrypt::Engine.generate_salt
    self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
  end

  def self.authenticate(email, password)
    organization = Organization.where(email: email).first
    if organization && organization.password_hash == BCrypt::Engine.hash_secret(password, organization.password_salt)
      organization
    else
      nil
    end
  end
end
