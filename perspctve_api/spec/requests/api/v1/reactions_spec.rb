require 'rails_helper'

RSpec.describe "Api::V1::Reactions", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/api/v1/reactions/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/api/v1/reactions/update"
      expect(response).to have_http_status(:success)
    end
  end

end
