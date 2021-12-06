class BikeFromUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :brand, :employee_id
end
