class AddStatsToOpinions < ActiveRecord::Migration[6.1]
  def change
    add_column :opinions, :stats, :jsonb, default: {verdict: 'neutral', strongly_agree_perc: 0.20, agree_perc: 0.20, neutral_perc: 0.20, disagree_perc: 0.20, strongly_disagree_perc: 0.20}
  end
end
