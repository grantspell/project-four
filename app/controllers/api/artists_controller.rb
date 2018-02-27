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
        artistId = params[:artist_id]

        @artistType = Artist.find_by_id(artistId).artist_type

        if @artistType == "visual"
            @artistry = Visual.where(artist_id: artistId)
        elsif @artistType == "audio"
            @artistry = Audio.where(artist_id: artistId)
        end

        render json: @artistry
    end

    def visuals
        @visuals = Visual.all

        render json: @visuals
    end

    def audios
        @audios = Audio.all

        render json: @audios
    end

    def show_song
        artistId = params[:artist_id]

        @artistSong = Audio.where(artist_id: artistId).first.previewUrl

        render json: @artistSong
    end

    def create
        artistData = params[:artist_params]

        @artist = Artist.new do |a|
            a.name = artistData.name
            a.artist_type = artistData.artist_type
            a.description = artistData.description
            a.artist_image = artistData.artist_image
        end

        if @artist.save
            render json: @artist
        end
    end
    
end
