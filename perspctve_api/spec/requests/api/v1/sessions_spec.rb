require 'rails_helper'

RSpec.describe "Api::V1::Sessions", type: :request do
  describe "GET /signin" do
    it "returns http success" do
      get "/api/v1/sessions/signin"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /signout" do
    it "returns http success" do
      get "/api/v1/sessions/signout"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /verify" do
    it "returns http success" do
      get "/api/v1/sessions/verify"
      expect(response).to have_http_status(:success)
    end
  end

end
