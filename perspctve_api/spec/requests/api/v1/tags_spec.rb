require 'rails_helper'

RSpec.describe "Api::V1::Tags", type: :request do
  describe "GET /search" do
    let(:tags) {['foo', 'bar', 'baz'].each{|tag| Tag.create(title: tag)}}
    
    before do
      tags
      allow_any_instance_of(ApplicationController).to receive(:authenticate_user!).and_return(true)
    end

    it "returns http success" do
      get "/api/v1/tags/search?q=fo"
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).size).to eq(1)
    end

    it "returns http success" do
      get "/api/v1/tags/search?q=ba"
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).size).to eq(2)
    end
  end
end
