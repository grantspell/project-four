class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all

        render json: @artists
    end

    def show
        artist_id = params[:id]
        
        @artist = Artist.find_by_id(artist_id)

        render json: @artist
    end
    
    def artistry
        artist_id = params[:artist_id]

        @artistType = Artist.find_by_id(artist_id).artist_type

        if @artistType == "visual"
            @artistry = Visual.where(artist_id: artist_id) 
        elsif @artistType == "audio"
            @artistry = Audio.where(artist_id: artist_id)
        end

        render json: @artistry
    end
    
end
