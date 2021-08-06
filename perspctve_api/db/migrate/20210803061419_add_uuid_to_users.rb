class AddUuidToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :uuid, :string
    add_index :users, :uuid
  end
end
