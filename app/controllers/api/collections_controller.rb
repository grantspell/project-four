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

    def create
        user_id = params[:user_id]

        @newCollection = Collection.new(title: "New Collection", user_id: user_id)

        if @newCollection.save
            render json: @newCollection
        end
    end

    def show
        user_id = params[:user_id]
        collection_id = params[:collection_id]

        @collection = Collection.where(user_id: user_id, id: collection_id)

        render json: @collection
    end

    def update
        user_id = params[:user_id]
        collection_id = params[:collection_id]

        @collection = Collection.where(user_id: user_id, id: collection_id)

        @collection.update_attributes(collection_params)

        render json: @collection
    end

    def destroy
        collection_id = params[:collection_id]

        @collection = Collection.find_by_id(collection_id)

        @collection.destroy

        render json: {
            msg: "Collection Successfully Deleted!"
        }
    end

    private
    
        def collection_params
            params.require(:collection).permit(:title, :mood_keywords, :publish_status, :user_id)
        end

end
