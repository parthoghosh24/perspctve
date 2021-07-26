class AddReopinionFieldsToOpinions < ActiveRecord::Migration[6.1]
  def change
    add_column :opinions, :in_support_id, :integer
    add_index :opinions, :in_support_id
    add_column :opinions, :oppose_to_id, :integer
    add_index :opinions, :oppose_to_id
  end
end
