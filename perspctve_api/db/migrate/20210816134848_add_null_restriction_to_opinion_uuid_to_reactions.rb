class AddNullRestrictionToOpinionUuidToReactions < ActiveRecord::Migration[6.1]
  def change
    change_column_null :reactions, :opinion_uuid, false
  end
end
