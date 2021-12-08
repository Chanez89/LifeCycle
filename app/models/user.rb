class User < ApplicationRecord

    validates :username, uniqueness: true


    has_secure_password
    has_many :service_tickets
    has_many :bike_from_users, through: :service_tickets
end
