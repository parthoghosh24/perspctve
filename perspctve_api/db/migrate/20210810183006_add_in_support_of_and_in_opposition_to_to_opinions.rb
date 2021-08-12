class AddInSupportOfAndInOppositionToToOpinions < ActiveRecord::Migration[6.1]
  def change
    add_column :opinions, :in_support_of, :string
    add_index :opinions, :in_support_of
    add_column :opinions, :in_oppostion_to, :string
    add_index :opinions, :in_oppostion_to
  end
end
