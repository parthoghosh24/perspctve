class FixTypoInOpinions < ActiveRecord::Migration[6.1]
  def change
    rename_column :opinions, :in_oppostion_to, :in_opposition_to
  end
end
