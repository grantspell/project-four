class Api::UsersController < ApplicationController

    # display all users
    def index
        # get all users from db and save to instance variable
        @users = User.all

        render json: @users
    end

    def create
        @user = User.new(user_params)

        if @user.save
            render json: @user
        end
    end

    def show
        username = params[:username]

        @user = User.find_by_username(username)

        render json: @user
    end

    def update

        id = params[:id]

        @user = User.find_by_id(id)

        @user.update_attributes(user_params)

        render json: @user
    end

    def destroy
        id = params[:id]

        @user = User.find_by_id(id)
        
        @user.destroy

        render json: {
            msg: "User Successfully Deleted!"
        }
    end

    private

    def user_params
        params.require(:user).permit(:name, :username, :password, :user_image)
    end

end
