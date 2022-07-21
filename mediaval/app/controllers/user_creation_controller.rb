class UserCreationController < ApplicationController
    before_action :player_params, only: [:create]
    before_action :find_player, only: [:update, :destroy, :show]
    def index
        form_authenticity_token
        current_user
    end

    def show
        render json: @player
    end

    def create
        new_player = Player.new(player_params)
        new_player.save
        render json: new_player
    end

    def update
        @player.update(player_params)
        render json: @player
    end

    def destroy
      @player.destroy
      render json: @player
    end


    private

    def player_params
        params.require(:user_creation).permit(:name, :user_id, :classe_id, :artefact_id)
    end

    def find_player
        @player = Player.find(params[:id])
    end

end
