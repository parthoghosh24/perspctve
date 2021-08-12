# == Schema Information
#
# Table name: opinion_tags
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  opinion_id :bigint           not null
#  tag_id     :bigint           not null
#
# Indexes
#
#  index_opinion_tags_on_opinion_id  (opinion_id)
#  index_opinion_tags_on_tag_id      (tag_id)
#
# Foreign Keys
#
#  fk_rails_...  (opinion_id => opinions.id)
#  fk_rails_...  (tag_id => tags.id)
#
require 'rails_helper'

RSpec.describe OpinionTag, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
