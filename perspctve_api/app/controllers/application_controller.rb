class ApplicationController < ActionController::API
  include JsonWebToken
  before_action :authenticate_user!

  private

  def authenticate_user!
    
  end
end
