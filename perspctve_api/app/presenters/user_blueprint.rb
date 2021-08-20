class UserBlueprint < Blueprinter::Base
  identifier :username
  fields :first_name, :last_name, :username, :avatar, :stats
end
