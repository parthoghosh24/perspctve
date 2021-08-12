class ApplicationController < ActionController::API
  include JsonWebToken
  before_action :authenticate_user!
  before_action :current_user

  private

  def authenticate_user!
    token = request.headers['HTTP_AUTHORIZATION'].split(' ')[1]
    decoded = JsonWebToken.decode(token)
    @user = User.find_by(uuid: decoded[0]['uuid'])
  rescue StandardError
    render json: { error: 'Not authorized' }, status: :unauthorized
  end

  def current_user
    @user
  end
end
