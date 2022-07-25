class MobController < ApplicationController
    before_action :find_mob, only: [:show]
    def index
        render json: Mob.all
    end

    def show
        mob_render = []
        mob_render.push(@mob)
        mob_render.push(@mob.capacities)
        render json: mob_render
    end

    private

    def find_mob
        @mob = Mob.find(params[:id])
    end
end