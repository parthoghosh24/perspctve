module Api
  module V1
    module Users
      class OpinionsController < ApplicationController
        skip_before_action :authenticate_user!, only: %i[index]
        skip_before_action :current_user, only: %i[index]

        def index
          if params[:username] == 'anonymous'
            opinions = Opinion.where(is_anonymous: true).published
            user = nil
          elsif !@user || @user && @user.username != params[:username]
            user = User.find_by(username: params[:username])
            opinions = user.opinions.published.non_anonymous
          else
            user = @user
            opinions = @user.opinions.published
          end
          current_user_reactions = @user ? Reaction.where(user: @user, opinion: opinions) : Reaction.where(fingerprint: @fingerprint, opinion: opinions)
          opinions_hash = OpinionBlueprint.render_as_hash(opinions)
          reactions_hash = ReactionBlueprint.render_as_hash(current_user_reactions)
          render json: { user: user ? UserBlueprint.render_as_hash(user) : { username: 'anonymous', stats: {opinions: opinions.size, agree_total: Reaction.where(opinion: opinions, reaction_type: ['strongly_agree', 'agree']).size} }, opinions: opinions_hash, current_user_reactions: reactions_hash }, status: :ok
        end
      end
    end
  end
end
