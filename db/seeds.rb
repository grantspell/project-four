# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USERS
User.create({ name: "Bob Ross", username: "HeWhoPaints", password: "happyLittleTrees", user_image: "https://static-cdn.jtvnw.net/jtv_user_pictures/panel-105458682-image-30bb3ea9145a9b30-320-320.jpeg?imenable=1&impolicy=panel-images&imwidth=320" })
User.create({ name: "Anna Wintour", username: "VogueWintour", password: "oversizedSunglasses", user_image: "https://www.arabiaweddings.com/sites/default/files/news/2014/06/anna.jpg" })
