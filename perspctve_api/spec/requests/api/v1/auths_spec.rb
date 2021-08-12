require 'rails_helper'

RSpec.describe 'Api::V1::Auths', type: :request do
  describe 'POST /token' do
    let(:token) { 'awesometoken' }

    before do
      allow_any_instance_of(GoogleAuth).to receive(:user_details).and_return({ 'family_name' => 'Last',
                                                                               'given_name' => 'First',
                                                                               'email' => 'abc@email.com',
                                                                               'avatar' => 'imageUrl' })
      allow(JsonWebToken).to receive(:encode).and_return('encodedtoken')
    end

    it 'returns http success' do
      post '/api/v1/auths/token', params: { token: token }
      expect(response).to have_http_status(:success)
    end
  end
end
