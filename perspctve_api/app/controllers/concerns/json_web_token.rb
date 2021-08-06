require 'jwt'

module JsonWebToken
  def self.encode(payload)
    JWT.encode(payload, Rails.application.credentials.jwt[:secret_key], 'HS256')
  end

  def self.decode
    token = request.headers['Authorization'].split(' ')[1]
    begin
      JWT.decode(token, Rails.application.credentials.jwt[:secret_key], true, algorithm: 'HS256')
    rescue JWT::DecodeError
      nil
    end
  end
end
