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
BobRoss = User.create!({ name: "Bob Ross", username: "HeWhoPaints", password: "happyLittleTrees", user_image: "https://static-cdn.jtvnw.net/jtv_user_pictures/panel-105458682-image-30bb3ea9145a9b30-320-320.jpeg?imenable=1&impolicy=panel-images&imwidth=320" })
AnnaWintour = User.create!({ name: "Anna Wintour", username: "VogueWintour", password: "oversizedSunglasses", user_image: "https://www.arabiaweddings.com/sites/default/files/news/2014/06/anna.jpg" })

# COLLECTIONS
Ethereal = Collection.create!({ title: "Ethereal", mood_keywords: ['ethereal', 'inspired', 'happy'], publish_status: false, user_id: BobRoss.id })
UpToYou = Collection.create!({ title: "Up To You, Now", mood_keywords: ['relief', 'tired'], publish_status: false, user_id: AnnaWintour.id })
Wild = Collection.create!({ title: "Wild", mood_keywords: ['party', 'fun', 'heady'], publish_status: false, user_id: AnnaWintour.id })

# ENTRIES
Entry.create!({ title: "Finding Inspiration In The Stars", content: "Here I am searching the night sky for shooting stars through my kaleidescope. Listening to St. Vincent and studying Dalí's mind-bending work. Life is good.", collection_id: Ethereal.id })
Entry.create!({ title: "Oh To Be The Real Thing", content: "Every single light, fading for the dark. Oh prediculation, feel the titilation. Know feel real.", collection_id: UpToYou.id })
Entry.create!({ title: "Oh To Be The Real Thing", content: "Every single light, fading for the dark. Oh prediculation, feel the titilation. Know feel real.", collection_id: Wild.id })

# A ARTISTS
StVincent = Artist.create!({ name: "St. Vincent", artist_type: "audio", description: "Anne Erin 'Annie' Clark (born September 28, 1982),[5][6] better known by her stage name St. Vincent, is an American musician, singer-songwriter, and multi-instrumentalist. After studying at Berklee College of Music for three years, she began her music career as a member of the Polyphonic Spree. Clark was also a member of Sufjan Stevens's touring band before forming her own band in 2006.", artist_image: "https://pbs.twimg.com/profile_images/917819850625617926/6Vs1Ae6B.jpg" })
SoftHair = Artist.create!({ name: "Soft Hair", artist_type: "audio", description: "Soft Hair are Connan Mockasin and Sam Dust (LA PRIEST / Late of The Pier). Their eponymous debut album is due for release via Weird World on October 14th 2016. ", artist_image: "https://i.imgur.com/blrMo6M.jpg" })

# V ARTISTS
SalvadorDali = Artist.create!({ name: "Salvador Dalí", artist_type: "visual", description: "A surrealist painter, the Spanish Salvador Dali is one of the most enigmatic artists of the twentieth century. Known for his weird and outlandish subject matter, Dali's most famous work of art is probably The Persistence of Memory (1931), often called just 'Clocks' and widely regarded as a Surrealist masterpiece.", artist_image: "https://i.imgur.com/F2DxC4t.jpg" })
VincentVanGogh = Artist.create!({ name: "Vincent van Gogh", artist_type: "visual", description: "Vincent Willem van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art.", artist_image: "https://i.imgur.com/67CQcXt.jpg" })
JaredFrench = Artist.create!({ name: "Jared French", artist_type: "visual", description: "Jared French was an American painter who specialized in the medium of egg tempera. He was one of the artists attributed to the style of art known as magic realism along with contemporaries George Tooker and Paul Cadmus. ", artist_image: "https://i.imgur.com/XrLG27S.jpg" })
FridaKahlo = Artist.create!({ name: "Frida Kahlo", artist_type: "visual", description: "Frida Kahlo de Rivera was a Mexican painter, who mostly painted self-portraits. Inspired by Mexican popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.", artist_image: "https://i.imgur.com/1eqkqxz.jpg" })
KeithHaring = Artist.create!({ name: "Keith Haring", artist_type: "visual", description: "Keith Allen Haring was an American artist whose pop art and graffiti-like work grew out of the New York City street culture of the 1980s.", artist_image: "https://i.imgur.com/zvpybrm.jpg" })

# VISUALS
Visual.create!({ title: "The Burning Giraffe", visual_url: "https://learnodo-newtonic.com/wp-content/uploads/2017/02/The-Burning-Giraffe-1937-Salvador-Dali.jpg", artist_id: SalvadorDali.id, collection_id: Ethereal.id })
Visual.create!({ title: "The Burning Giraffe", visual_url: "https://learnodo-newtonic.com/wp-content/uploads/2017/02/The-Burning-Giraffe-1937-Salvador-Dali.jpg", artist_id: SalvadorDali.id, collection_id: UpToYou.id })
Visual.create!({ title: "The Burning Giraffe", visual_url: "https://learnodo-newtonic.com/wp-content/uploads/2017/02/The-Burning-Giraffe-1937-Salvador-Dali.jpg", artist_id: SalvadorDali.id, collection_id: Wild.id })

# AUDIOS
Audio.create!({ trackName: "Dilettante", collectionName: "Strange Mercy", artistName: "St. Vincent", artworkUrl100: "http://is2.mzstatic.com/image/thumb/Music/v4/04/7b/b0/047bb06c-ce0f-b159-aa1a-e4a07c0c02b5/source/100x100bb.jpg",previewUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/10/63/41/10634134-411d-d1c4-7427-4299a7623090/mzaf_3827557030517517515.plus.aac.p.m4a", artist_id: StVincent.id, collection_id: Ethereal.id })
Audio.create!({ trackName: "Relaxed Lizard", collectionName: "Soft Hair", artistName: "Soft Hair", artworkUrl100: "http://is4.mzstatic.com/image/thumb/Music62/v4/5c/a4/ab/5ca4abf3-85f7-07c5-23dd-4f7481e1c60f/source/100x100bb.jpg", previewUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview62/v4/a8/25/ae/a825ae23-d783-5505-0e2a-b891cf8bcf11/mzaf_3055768545459745060.plus.aac.p.m4a", artist_id: SoftHair.id, collection_id: Wild.id })
Audio.create!({ trackName: "Lying Has To Stop", collectionName: "Soft Hair", artistName: "Soft Hair", artworkUrl100: "http://is4.mzstatic.com/image/thumb/Music62/v4/5c/a4/ab/5ca4abf3-85f7-07c5-23dd-4f7481e1c60f/source/100x100bb.jpg", previewUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview42/v4/7b/2d/d8/7b2dd89e-1336-780e-4376-e671de98d013/mzaf_4259663038635372964.plus.aac.p.m4a", artist_id: SoftHair.id, collection_id: UpToYou.id })