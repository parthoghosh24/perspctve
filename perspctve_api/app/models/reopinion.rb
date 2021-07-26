class Reopinion < ApplicationRecord
  belongs_to :in_support, class_name: "Opinion", foreign_key: "in_support_id"
  belongs_to :oppose_to, class_name: "Opinion", foreign_key: "oppose_to_id"
end
