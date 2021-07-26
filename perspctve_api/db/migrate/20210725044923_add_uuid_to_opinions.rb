class AddUuidToOpinions < ActiveRecord::Migration[6.1]
  def change
    add_column :opinions, :uuid, :string
    add_index :opinions, :uuid
  end
end
