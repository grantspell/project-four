class Api::EntriesController < ApplicationController

    def index
        @entries = Entry.all

        render json: @entries
    end
    
end
