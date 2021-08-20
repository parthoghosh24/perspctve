module Api
  module V1
    module Users
      class OpinionsController < ApplicationController
        def index
          opinions = current_user.opinions.published
          current_user_reactions = @user ? Reaction.where(user: @user, opinion: opinions) : Reaction.where(fingerprint: @fingerprint, opinion: opinions)
          opinions_hash = OpinionBlueprint.render_as_hash(opinions)
          reactions_hash = ReactionBlueprint.render_as_hash(current_user_reactions)
          render json: { opinions: opinions_hash, current_user_reactions: reactions_hash }, status: :ok
        end
      end
    end
  end
end
