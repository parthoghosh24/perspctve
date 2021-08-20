class Api::V1::ReactionsController < ApplicationController
  include JsonWebToken

  skip_before_action :authenticate_user!, only: %i[create destroy]
  skip_before_action :current_user, only: %i[create destroy]
  before_action :fetch_reactions

  def create
    @reactions.destroy_all if @reactions.size.positive?
    reaction = Reaction.new(reaction_params)
    unless reaction.save
      p "reaction errors :#{reaction.errors.inspect}"
      render json: { error: 'Something went wrong' }, status: :internal_server_error
    end
    head :ok
  end

  def destroy
    @reactions.destroy_all
    head :ok
  end

  private

  def fetch_reactions
    if @user
      @reactions = Reaction.where(user: @user, opinion: Opinion.find_by(uuid: reaction_params[:opinion_uuid]))
    else
      @reactions = Reaction.where(fingerprint: @fingerprint, opinion: Opinion.find_by(uuid: reaction_params[:opinion_uuid]))
    end
  end

  def reaction_params
    build_params
    params.require(:reaction).permit(:opinion_uuid, :fingerprint, :reaction_type, :user_id, :uuid)
  end

  def build_params
    params[:reaction][:user_id] = @user&.id
    params[:reaction][:uuid] = SecureRandom.uuid
    params[:reaction][:fingerprint] = @fingerprint unless @user
  end
end
