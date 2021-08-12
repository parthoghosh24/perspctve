require 'rails_helper'

RSpec.describe "Api::V1::Opinions", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/opinions/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    let(:user) { User.create(first_name: 'First',
                             last_name: 'Last',
                             email: 'author@mail.com',
                             username: 'author')}
    
    let(:opinion) { {
      title: 'Some Title',
      body: 'Some body',
      media: {type: 'image', url: 'http://www.google.com'},
      tags: ['foo', 'bar'],
      is_anonymous: false
    } }
    before do
      user
      allow_any_instance_of(ApplicationController).to receive(:authenticate_user!).and_return(true)
      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
    end
    
    it "returns http success" do
      post "/api/v1/opinions", params: {opinion: opinion}
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT /update" do
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
