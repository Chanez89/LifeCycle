class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :full_name
end
