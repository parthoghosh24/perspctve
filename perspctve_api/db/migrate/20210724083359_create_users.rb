class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :username
      t.string :avatar

      t.timestamps
    end
    add_index :users, :email
    add_index :users, :username
  end
end
