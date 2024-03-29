class OpinionBlueprint < Blueprinter::Base
  identifier :uuid
  fields :title, :body
  field :media, if: ->(_field_name, opinion, _options) { opinion.media && opinion.media.size.positive? }
  field :time_ago
  field :is_anonymous
  field :stats
  association :tags, blueprint: TagBlueprint
  association :user, if: ->(_field_name, opinion, _options) { !opinion.is_anonymous }, blueprint: UserBlueprint
  association :in_opposition, if: ->(_field_name, opinion, _options) { opinion.in_opposition_to.present? }, blueprint: OpinionBlueprint
  association :in_support, if: ->(_field_name, opinion, _options) { opinion.in_support_of.present? }, blueprint: OpinionBlueprint
end
