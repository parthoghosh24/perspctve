# == Schema Information
#
# Table name: reactions
#
#  id            :bigint           not null, primary key
#  fingerprint   :string
#  opinion_uuid  :string           not null
#  reaction_type :enum
#  uuid          :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :bigint
#
# Indexes
#
#  index_reactions_on_opinion_uuid   (opinion_uuid)
#  index_reactions_on_reaction_type  (reaction_type)
#  index_reactions_on_user_id        (user_id)
#  index_reactions_on_uuid           (uuid)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require 'rails_helper'

RSpec.describe Reaction, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
