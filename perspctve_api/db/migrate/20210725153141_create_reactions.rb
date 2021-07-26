class CreateReactions < ActiveRecord::Migration[6.1]
  def change
    create_table :reactions do |t|
      t.references :user, null: false, foreign_key: true
      t.string :uuid
      t.string :fingerprint
      t.references :opinion, null: false, foreign_key: true

      t.timestamps
    end
    add_index :reactions, :uuid
  end
end
