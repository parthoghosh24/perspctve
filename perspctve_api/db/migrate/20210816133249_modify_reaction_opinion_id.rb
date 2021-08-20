class ModifyReactionOpinionId < ActiveRecord::Migration[6.1]
  def change
    remove_index :reactions, name: :index_reactions_on_opinion_id
    remove_column :reactions, :opinion_id
    add_column :reactions, :opinion_uuid, :string
    add_index :reactions, :opinion_uuid
  end
end
