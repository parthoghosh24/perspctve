class Api::V1::AuthsController < ApplicationController
  skip_before_action :authenticate_user!
  include GoogleAuth

  def token
    begin
      user_details = user_details(params[:token])
      user = User.where(first_name: user_details['given_name'],
        last_name: user_details['family_name'],
        email: user_details['email'],
        username: user_details['email'].split('@')[0],
        avatar: user_details['picture']).first_or_create!
      user.update(uuid: SecureRandom.uuid)
      token = JsonWebToken.encode({ uuid: user.uuid })
      response.set_header('X-AUTH-TOKEN', token)
      render json: user, status: :ok
    rescue StandardError => e
      render json: { error: e }, status: :internal_server_error
    end
  end
end
