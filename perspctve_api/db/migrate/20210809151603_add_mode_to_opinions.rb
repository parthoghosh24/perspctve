class AddModeToOpinions < ActiveRecord::Migration[6.1]
  def up
    execute <<-SQL
      CREATE TYPE mode_types AS ENUM ('published', 'draft', 'blocked');
    SQL
    add_column :opinions, :mode, :mode_types
    add_index :opinions, :mode
  end

  def down
    execute <<-SQL
      DROP TYPE mode_types;
    SQL
    remove_column :opinions, :mode
  end
end
