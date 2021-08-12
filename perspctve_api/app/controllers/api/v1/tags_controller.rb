class Api::V1::TagsController < ApplicationController
  def search
    tags = Tag.search(params[:q])
    render json: tags, status: :ok
  end
end
