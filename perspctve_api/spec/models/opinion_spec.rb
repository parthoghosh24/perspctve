# == Schema Information
#
# Table name: opinions
#
#  id               :bigint           not null, primary key
#  body             :text
#  in_opposition_to :string
#  in_support_of    :string
#  is_anonymous     :boolean
#  media            :jsonb
#  mode             :enum
#  stats            :jsonb
#  title            :string
#  uuid             :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  in_support_id    :integer
#  oppose_to_id     :integer
#  user_id          :bigint           not null
#
# Indexes
#
#  index_opinions_on_in_opposition_to  (in_opposition_to)
#  index_opinions_on_in_support_id     (in_support_id)
#  index_opinions_on_in_support_of     (in_support_of)
#  index_opinions_on_is_anonymous      (is_anonymous)
#  index_opinions_on_mode              (mode)
#  index_opinions_on_oppose_to_id      (oppose_to_id)
#  index_opinions_on_user_id           (user_id)
#  index_opinions_on_uuid              (uuid)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require 'rails_helper'

RSpec.describe Opinion, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
