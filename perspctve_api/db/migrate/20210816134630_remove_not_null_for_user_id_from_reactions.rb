class RemoveNotNullForUserIdFromReactions < ActiveRecord::Migration[6.1]
  def change
    change_column_null :reactions, :user_id, true
  end
end
