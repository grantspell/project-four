class Api::ContentsController < ApplicationController

    def visual
        collection_id = params[:collection_id]

        @visuals = Visual.where(collection_id: collection_id)

        render json: @visuals
    end

    def audio
        collection_id = params[:collection_id]

        @audios = Audio.where(collection_id: collection_id)

        render json: @audios
    end

    def entry
        collection_id = params[:collection_id]

        @entries = Entry.where(collection_id: collection_id)

        render json: @entries
    end
    
end
