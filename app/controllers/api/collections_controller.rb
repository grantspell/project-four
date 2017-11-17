class Api::CollectionsController < ApplicationController

    def index
        @collections = Collection.all

        render json: @collections
    end

    def userCollections
        user_id = params[:user_id]

        @collections = Collection.where(user_id: user_id).order("updated_at DESC")

        render json: @collections
    end

    def show
        user_id = params[:user_id]
        collection_id = params[:collection_id]

        @collection = Collection.where(user_id: user_id, id: collection_id)

        render json: @collection
    end


end
