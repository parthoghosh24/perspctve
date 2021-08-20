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
class Reaction < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :opinion, foreign_key: :opinion_uuid, primary_key: :uuid
  after_save :update_stats
  after_destroy :update_stats

  enum reaction_type: {
    strongly_agree: 'strongly_agree',
    agree: 'agree',
    neutral: 'neutral',
    disagree: 'disagree',
    strongly_disagree: 'strongly_disagree'
  }

  validates :reaction_type, inclusion: { in: reaction_types.keys }

  

  private

  def update_stats
    update_opinion_stats
    update_opinion_user_stats
  end

  def update_opinion_stats
    stats = opinion.stats
    total = Reaction.where(opinion: opinion).count
    strongly_agree_count = Reaction.where(opinion: opinion, reaction_type: 'strongly_agree').count
    agree_count = Reaction.where(opinion: opinion, reaction_type: 'agree').count
    neutral_count = Reaction.where(opinion: opinion, reaction_type: 'neutral').count
    disagree_count = Reaction.where(opinion: opinion, reaction_type: 'disagree').count
    strongly_disagree_count = Reaction.where(opinion: opinion, reaction_type: 'strongly_disagree').count

    if total.zero?
      stats['verdict'] = 'Neutral'
      stats['strongly_agree_perc'] = 0.2
      stats['agree_perc'] = 0.2
      stats['neutral_perc'] = 0.2
      stats['disagree_perc'] = 0.2
      stats['strongly_disagree_perc'] = 0.2
      return
    end
    stats['strongly_agree_perc'] = strongly_agree_count / (total * 1.0)
    stats['agree_perc'] = agree_count / (total * 1.0)
    stats['neutral_perc'] = neutral_count / (total * 1.0)
    stats['disagree_perc'] = disagree_count / (total * 1.0)
    stats['strongly_disagree_perc'] = strongly_disagree_count / (total * 1.0)

    case reaction_type
    when 'strongly_agree', 'agree'
      stats['verdict'] = 'Mostly Agreeing' if (stats['strongly_agree_perc'] + stats['agree_perc']) > 0.56
      if (stats['strongly_agree_perc'] + stats['agree_perc']) > 0.49 && (stats['strongly_agree_perc'] + stats['agree_perc']) < 0.56
        stats['verdict'] = 'Neutral'
      end
    when 'neutral'
      stats['verdict'] = 'Neutral' if stats['neutral_perc'] > 0.49
    when 'disagree','strongly_disagree'
      stats['verdict'] = 'Mostly Disagreeing' if (stats['strongly_disagree_perc'] + stats['disagree_perc']) > 0.56
      if (stats['strongly_disagree_perc'] + stats['disagree_perc']) > 0.49 && (stats['strongly_disagree_perc'] + stats['disagree_perc']) < 0.56
        stats['verdict'] = 'Neutral'
      end
    end
    opinion.update(stats: stats)
  end

  def update_opinion_user_stats
    return unless reaction_type == 'strongly_agree' || reaction_type == 'agree'

    stats = opinion.user.stats
    stats[:agree_total] = Reaction.where(opinion: opinion, reaction_type: ['strongly_agree','agree']).count
    opinion.user.update(stats: stats)
  end
end
