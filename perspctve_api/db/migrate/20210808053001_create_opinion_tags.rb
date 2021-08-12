class CreateOpinionTags < ActiveRecord::Migration[6.1]
  def change
    create_table :opinion_tags do |t|
      t.belongs_to :opinion, null: false, foreign_key: true
      t.belongs_to :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
