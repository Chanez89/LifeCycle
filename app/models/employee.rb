class Employee < ApplicationRecord
    has_secure_password
    has_many :service_tickets
    # has_many :bike_from_users, through: :service_tickets
    # i don't think i need to connect the bikefromusers, keeping this just in case.
end
