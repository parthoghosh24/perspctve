# == Schema Information
#
# Table name: reactions
#
#  id            :bigint           not null, primary key
#  fingerprint   :string
#  reaction_type :enum
#  uuid          :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  opinion_id    :bigint           not null
#  user_id       :bigint           not null
#
# Indexes
#
#  index_reactions_on_opinion_id     (opinion_id)
#  index_reactions_on_reaction_type  (reaction_type)
#  index_reactions_on_user_id        (user_id)
#  index_reactions_on_uuid           (uuid)
#
# Foreign Keys
#
#  fk_rails_...  (opinion_id => opinions.id)
#  fk_rails_...  (user_id => users.id)
#
class Reaction < ApplicationRecord
  belongs_to :user
  belongs_to :opinion

  enum reaction_type: {
    strongly_agree: 'strongly_agree',
    agree: 'agree',
    neutral: 'neutral',
    disagree: 'disagree',
    strongly_disagree: 'strongly_disagree'
  }

  validates :reaction_type, inclusion: { in: reaction_types.keys }
end
