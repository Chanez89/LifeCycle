class CreateServiceTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :service_tickets do |t|
      t.integer :employee_id
      t.integer :bike_from_user_id
      t.integer :user_id
      t.integer :phone_number
      t.string :service_type
      t.date :input_date
      t.date :worktime
      t.integer :price

      t.timestamps
    end
  end
end
