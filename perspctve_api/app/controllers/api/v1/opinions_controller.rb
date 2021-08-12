class Api::V1::OpinionsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]
  skip_before_action :current_user, only: %i[index show]

  def index
    opinions = OpinionBlueprint.render(Opinion.all)
    render json: opinions, status: :ok
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
