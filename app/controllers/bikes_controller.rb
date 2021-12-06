class BikesController < ApplicationController

    def index
        storeBikes = Bike.all
        render json: storeBikes
    end
    
    def show
        singleStoreBike = Bike.find(params[:id])
        render json: singleStoreBike
    end
end
