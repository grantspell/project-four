# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

# USERS
User.create({ name: "Bob Ross", username: "HeWhoPaints", password: "happyLittleTrees", user_image: "https://static-cdn.jtvnw.net/jtv_user_pictures/panel-105458682-image-30bb3ea9145a9b30-320-320.jpeg?imenable=1&impolicy=panel-images&imwidth=320" })
User.create({ name: "Anna Wintour", username: "VogueWintour", password: "oversizedSunglasses", user_image: "https://www.arabiaweddings.com/sites/default/files/news/2014/06/anna.jpg" })

# COLLECTIONS
Collection.create({ title: "Ethereal", mood_keywords: ['ethereal', 'inspired', 'happy'], publish_status: false, user_id: 1 })

# ENTRIES
Entry.create({ title: "Finding Inspiration In The Stars", content: "Here I am searching the night sky for shooting stars through my kaleidescope. Listening to St. Vincent and studying Dalí's mind-bending work. Life is good.", collection_id: 1 })

# A ARTISTS

# V ARTISTS
Artist.create({ name: "Salvador Dalí", artist_type: "visual", description: "A surrealist painter, the Spanish Salvador Dali is one of the most enigmatic artists of the twentieth century. Known for his weird and outlandish subject matter, Dali's most famous work of art is probably The Persistence of Memory (1931), often called just 'Clocks' and widely regarded as a Surrealist masterpiece.", artist_image: "https://kristallwelten.swarovski.com/Content.Node/wattens/Salvador_Dali_Swarovski.jpg?w=460&h=345" })

# VISUALS
Visual.create({ title: "The Burning Giraffe", visual_url: "https://learnodo-newtonic.com/wp-content/uploads/2017/02/The-Burning-Giraffe-1937-Salvador-Dali.jpg", artist_id: 1, collection_id: 1 })

# AUDIOS