class User < ApplicationRecord
  has_many :list_applications, dependent: :destroy
  has_many :listings, through: :list_applications
  has_secure_password
  validates_presence_of :first_name, :last_name, :username
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :password, :length => { in: 3..20, allow_blank: true}
end
