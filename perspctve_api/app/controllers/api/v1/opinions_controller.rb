class Api::V1::OpinionsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]
  skip_before_action :current_user, only: %i[index show]

  def index
    opinions = Opinion.published
    current_user_reactions = @user ? Reaction.where(user: @user, opinion: opinions) : Reaction.where(fingerprint: @fingerprint, opinion: opinions)
    opinions_hash = OpinionBlueprint.render_as_hash(opinions)
    reactions_hash = ReactionBlueprint.render_as_hash(current_user_reactions)
    render json: { opinions: opinions_hash, current_user_reactions: reactions_hash }, status: :ok
  end

  def create
    OpinionService.new(opinion_params, current_user).create
    head :ok
  rescue StandardError
    render json: { error: 'Something went wrong!' }, status: :internal_server_error
  end

  def update
    head :ok
  end

  def show
    opinion = Opinion.find_by(uuid: params[:uuid])
    render json: opinion, status: :ok
  end

  private

  def opinion_params
    params.require(:opinion).permit(:title, :body, :is_anonymous, :in_support_of, :in_oppostion_to, :mode, media: {}, tags: [])
  end
end
