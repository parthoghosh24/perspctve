class AddIsAnonymousToOpinions < ActiveRecord::Migration[6.1]
  def change
    add_column :opinions, :is_anonymous, :boolean
    add_index :opinions, :is_anonymous
  end
end
