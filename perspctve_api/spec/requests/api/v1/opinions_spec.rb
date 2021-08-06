require 'rails_helper'

RSpec.describe "Api::V1::Opinions", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/opinions/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /new" do
    it "returns http success" do
      get "/api/v1/opinions/new"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/api/v1/opinions/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/api/v1/opinions/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/api/v1/opinions/show"
      expect(response).to have_http_status(:success)
    end
  end

end
