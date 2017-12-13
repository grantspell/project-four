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

    def createAudio
        track = params[:trackName]
        artist = params[:artistName]
        collection = params[:collectionName]
        artwork = params[:artworkUrl100]
        preview = params[:previewUrl]

        @aduio = Audio.new(trackName: track, artistName: artist, collectionName: collection, artworkUrl100: artwork, previewUrl: preview)

        if @audio.save
            render json: @audio
        end
    end

    def entry
        collection_id = params[:collection_id]

        @entries = Entry.where(collection_id: collection_id)

        render json: @entries
    end
    

    private

    def audio_params
        params.require(:audio).permit(:trackName, :artistName, :collectionName, :artworkUrl100, :previewUrl)
    end
    
end
