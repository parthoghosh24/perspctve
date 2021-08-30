class Api::V1::PingController < ApplicationController
  skip_before_action :authenticate_user!
  skip_before_action :current_user
  def index
    render json: { message: 'I am alive' }
  end
end
