# == Schema Information
#
# Table name: opinions
#
#  id              :bigint           not null, primary key
#  body            :text
#  in_oppostion_to :string
#  in_support_of   :string
#  is_anonymous    :boolean
#  media           :jsonb
#  mode            :enum
#  stats           :jsonb
#  title           :string
#  uuid            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  in_support_id   :integer
#  oppose_to_id    :integer
#  user_id         :bigint           not null
#
# Indexes
#
#  index_opinions_on_in_oppostion_to  (in_oppostion_to)
#  index_opinions_on_in_support_id    (in_support_id)
#  index_opinions_on_in_support_of    (in_support_of)
#  index_opinions_on_is_anonymous     (is_anonymous)
#  index_opinions_on_mode             (mode)
#  index_opinions_on_oppose_to_id     (oppose_to_id)
#  index_opinions_on_user_id          (user_id)
#  index_opinions_on_uuid             (uuid)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Opinion < ApplicationRecord
  include ActionView::Helpers::DateHelper
  default_scope { order(updated_at: :desc) }

  belongs_to :user
  belongs_to :in_support_of, class_name: :Opinion, foreign_key: :in_support_of, primary_key: :uuid, optional: true
  belongs_to :in_oppostion_to, class_name: :Opinion, foreign_key: :in_oppostion_to, primary_key: :uuid, optional: true

  has_many :in_support_ofs, class_name: :Opinion, foreign_key: :in_support_of, primary_key: :uuid
  has_many :in_oppostion_tos, class_name: :Opinion, foreign_key: :in_oppostion_to, primary_key: :uuid

  has_many :reactions, foreign_key: :opinion_uuid, primary_key: :uuid

  has_many :opinion_tags
  has_many :tags, through: :opinion_tags

  scope :published, -> { where(mode: 'published') }

  after_create :update_user_stats

  enum mode: {
    published: 'published',
    draft: 'draft',
    blocked: 'blocked'
  }

  validates :mode, inclusion: { in: modes.keys }
  validates :in_support_of, presence: true, allow_blank: true
  validates :in_oppostion_to, presence: true, allow_blank: true

  def time_ago
    time_ago_in_words updated_at
  end

  private

  def update_user_stats
    stats = user.stats
    stats[:opinions] += 1
    user.update(stats: stats)
  end
end
