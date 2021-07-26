class CreateOpinions < ActiveRecord::Migration[6.1]
  def change
    create_table :opinions do |t|
      t.string :title
      t.jsonb :media
      t.text :body
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
