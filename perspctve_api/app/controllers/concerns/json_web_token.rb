require 'jwt'

module JsonWebToken
  def self.encode(payload)
    JWT.encode(payload, Rails.application.credentials.jwt[:secret_key], 'HS256')
  end

  def self.decode(token)
    JWT.decode(token, Rails.application.credentials.jwt[:secret_key], true, algorithm: 'HS256')
  rescue JWT::DecodeError => e
    p "e #{e}"
  end
end
