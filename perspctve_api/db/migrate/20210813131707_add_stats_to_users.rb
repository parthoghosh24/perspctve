class AddStatsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :stats, :jsonb, default: {opinions: 0, agree_total: 0}
  end
end
