require 'rails_helper'

RSpec.describe "Pings", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/ping/index"
      expect(response).to have_http_status(:success)
    end
  end

end
