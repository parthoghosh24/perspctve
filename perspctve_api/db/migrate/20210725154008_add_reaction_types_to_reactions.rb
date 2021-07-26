class AddReactionTypesToReactions < ActiveRecord::Migration[6.1]
  def up
    execute <<-SQL
      CREATE TYPE reaction_types AS ENUM ('strongly_agree', 'agree', 'neutral', 'disagree', 'strongly_disagree');
    SQL
    add_column :reactions, :reaction_type, :reaction_types
    add_index :reactions, :reaction_type
  end

  def down
    execute <<-SQL
      DROP TYPE reaction_types;
    SQL
    remove_column :reactions, :reaction_type
  end
end
