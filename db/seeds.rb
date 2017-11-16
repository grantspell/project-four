# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artist.destroy_all

# USERS
BobRoss = User.create({ name: "Bob Ross", username: "HeWhoPaints", password: "happyLittleTrees", user_image: "https://static-cdn.jtvnw.net/jtv_user_pictures/panel-105458682-image-30bb3ea9145a9b30-320-320.jpeg?imenable=1&impolicy=panel-images&imwidth=320" })
AnnaWintour = User.create({ name: "Anna Wintour", username: "VogueWintour", password: "oversizedSunglasses", user_image: "https://www.arabiaweddings.com/sites/default/files/news/2014/06/anna.jpg" })

# COLLECTIONS
Collection.create({ title: "Ethereal", mood_keywords: ['ethereal', 'inspired', 'happy'], publish_status: false, user_id: BobRoss.id })

# ENTRIES
Entry.create({ title: "Finding Inspiration In The Stars", content: "Here I am searching the night sky for shooting stars through my kaleidescope. Listening to St. Vincent and studying Dalí's mind-bending work. Life is good.", collection_id: 1 })

# A ARTISTS
StVincent = Artist.create({ name: "St. Vincent", artist_type: "audio", description: "Anne Erin 'Annie' Clark (born September 28, 1982),[5][6] better known by her stage name St. Vincent, is an American musician, singer-songwriter, and multi-instrumentalist. After studying at Berklee College of Music for three years, she began her music career as a member of the Polyphonic Spree. Clark was also a member of Sufjan Stevens's touring band before forming her own band in 2006.", artist_image: "https://pbs.twimg.com/profile_images/917819850625617926/6Vs1Ae6B.jpg" })

# V ARTISTS
SalvadorDali = Artist.create({ name: "Salvador Dalí", artist_type: "visual", description: "A surrealist painter, the Spanish Salvador Dali is one of the most enigmatic artists of the twentieth century. Known for his weird and outlandish subject matter, Dali's most famous work of art is probably The Persistence of Memory (1931), often called just 'Clocks' and widely regarded as a Surrealist masterpiece.", artist_image: "https://i.imgur.com/F2DxC4t.jpg" })
VincentVanGogh = Artist.create({ name: "Vincent van Gogh", artist_type: "visual", description: "He lost his ear via gay lover.", artist_image: "https://i.imgur.com/67CQcXt.jpg" })
JaredFrench = Artist.create({ name: "Jared French", artist_type: "visual", description: "A good looking dude and a great artist.", artist_image: "https://i.imgur.com/XrLG27S.jpg" })
FridaKahlo = Artist.create({ name: "Frida Kahlo", artist_type: "visual", description: "An entracing artist and soul with experience in everything life is worth living for.", artist_image: "https://i.imgur.com/1eqkqxz.jpg" })
KeithHaring = Artist.create({ name: "Keith Haring", artist_type: "visual", description: "Transcendent.", artist_image: "https://i.imgur.com/zvpybrm.jpg" })

# VISUALS
Visual.create({ title: "The Burning Giraffe", visual_url: "https://learnodo-newtonic.com/wp-content/uploads/2017/02/The-Burning-Giraffe-1937-Salvador-Dali.jpg", artist_id: SalvadorDali.id, collection_id: 1 })

# AUDIOS
Audio.create({ song: "Dilettante", album: "Strange Mercy", audio_url: "https://www.youtube.com/watch?v=894MYqeAzIo", artist_id: StVincent.id, collection_id: 1 })