# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p '<---Creating tags--->'

['politics', 'food', 'gaming', 'movies'].each do |tag|
  Tag.where(title: tag).first_or_create!
end

p '<---tags created--->'