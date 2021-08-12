module GoogleAuth
  include HTTParty

  def user_details(token)
    url = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{token}"
    response = HTTParty.get url
    response.parsed_response
  end
end
