class DialogController < ApplicationController
    before_action :find_dialog, only: [:show]
    def index
        render json: Dialog.all
    end

    def show
        dialog_render = []
        dialog_render.push(@dialog)
        dialog_render.push(@dialog.dialog_contents)
        dialog_render.push(@dialog.npc.name)
        render json: dialog_render
    end

    private

    def find_dialog
        @dialog = Dialog.find(params[:id])
    end

end