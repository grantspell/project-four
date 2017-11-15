class Api::CollectionsController < ApplicationController

    def index
        @collections = Collection.all

        render json: @collections
    end

    def show
        user_id = params[:user_id]

        @collections = Collection.where(user_id: user_id)

        render json: @collections
    end
    
end
