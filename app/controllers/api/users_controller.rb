class Api::UsersController < ApplicationController

    # display all users
    def index
        # get all users from db and save to instance variable
        @users = User.all

        render json: @users
    end

end
