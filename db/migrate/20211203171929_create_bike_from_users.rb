class CreateBikeFromUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :bike_from_users do |t|
      t.integer :user_id
      t.string :brand
      t.integer :employee_id

      t.timestamps
    end
  end
end
