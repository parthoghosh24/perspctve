class OpinionBlueprint < Blueprinter::Base
  include ActionView::Helpers::DateHelper

  identifier :uuid
  fields :title, :body
  field :media, if: ->(_field_name, opinion, _options) { opinion.media && opinion.media.size.positive? }
  field :time_ago
  association :tags, blueprint: TagBlueprint
  association :user, blueprint: UserBlueprint
  association :in_oppostion_to, blueprint: OpinionBlueprint, if: ->(_field_name, opinion, _options) { opinion.in_oppostion_to.present?}
  association :in_support_of, blueprint: OpinionBlueprint, if: ->(_field_name, opinion, _options) { opinion.in_support_of.present?}
end
