class Api::CollectionsController < ApplicationController

    def index
        @collections = Collection.all

        render json: @collections
    end

    def show
        
    end
    
end
