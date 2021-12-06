class CreateBikes < ActiveRecord::Migration[6.1]
  def change
    create_table :bikes do |t|
      t.string :brand
      t.string :name
      t.string :style
      t.string :img_url
      t.integer :price
      t.integer :weight_lb
      t.integer :size_cm

      t.timestamps
    end
  end
end
