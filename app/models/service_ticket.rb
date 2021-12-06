class ServiceTicket < ApplicationRecord
    belongs_to :employees
    belongs_to :users
    belongs_to :bike_from_users
end
