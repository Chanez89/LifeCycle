class ServiceTicketsController < ApplicationController
    def index
        serviceTickets = ServiceTicket.all
        render json: serviceTickets
    end

    def show
        reder json: ServiceTicket.find(params[:id])
    end
end
