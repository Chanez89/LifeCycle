class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :username
      t.string :password_digest
      t.string :full_name

      t.timestamps
    end
  end
end
