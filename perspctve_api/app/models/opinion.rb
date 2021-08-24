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
class Opinion < ApplicationRecord
  include ActionView::Helpers::DateHelper
  default_scope { order(updated_at: :desc) }

  belongs_to :user
  belongs_to :in_support, class_name: :Opinion, foreign_key: :in_support_of, primary_key: :uuid, optional: true
  belongs_to :in_opposition, class_name: :Opinion, foreign_key: :in_opposition_to, primary_key: :uuid, optional: true

  has_many :in_supports, class_name: :Opinion, foreign_key: :in_support_of, primary_key: :uuid
  has_many :in_oppositions, class_name: :Opinion, foreign_key: :in_opposition_to, primary_key: :uuid

  has_many :reactions, foreign_key: :opinion_uuid, primary_key: :uuid

  has_many :opinion_tags
  has_many :tags, through: :opinion_tags

  scope :published, -> { where(mode: 'published') }
  scope :non_anonymous, -> { where(is_anonymous: false) }

  after_create :update_user_stats

  enum mode: {
    published: 'published',
    draft: 'draft',
    blocked: 'blocked'
  }

  validates :mode, inclusion: { in: modes.keys }
  validates :in_support_of, presence: true, allow_blank: true
  validates :in_opposition, presence: true, allow_blank: true

  def time_ago
    time_ago_in_words created_at
  end

  private

  def update_user_stats
    stats = user.stats
    stats['opinions'] += 1
    user.update(stats: stats)
  end
end
