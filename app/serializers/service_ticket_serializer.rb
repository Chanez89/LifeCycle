class ServiceTicketSerializer < ActiveModel::Serializer
  attributes :id, :employee_id, :bike_from_user_id, :user_id, :service_type, :input_date, :worktime, :price, :phone_number
end
