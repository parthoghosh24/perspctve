module Api
  module V1
    module Users
      class OpinionsController < ApplicationController
        def index
          opinions = OpinionBlueprint.render(current_user.opinions)
          render json: opinions, status: :ok
        end
      end
    end
  end
end
