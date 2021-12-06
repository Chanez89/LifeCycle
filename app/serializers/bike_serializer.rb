class BikeSerializer < ActiveModel::Serializer
  attributes :id, :brand, :name, :style, :price, :weight_lb, :size_cm, :img_url
end
