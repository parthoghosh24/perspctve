# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  avatar     :string
#  email      :string
#  first_name :string
#  last_name  :string
#  stats      :jsonb
#  username   :string
#  uuid       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_users_on_email     (email)
#  index_users_on_username  (username)
#  index_users_on_uuid      (uuid)
#
class User < ApplicationRecord
  has_many :opinions
end
