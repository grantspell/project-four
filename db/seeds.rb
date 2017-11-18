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
AnneWintour = User.create!({ name: "Anne Wintour", username: "VogueWintour", password: "oversizedSunglasses", user_image: "https://www.arabiaweddings.com/sites/default/files/news/2014/06/anna.jpg" })

# COLLECTIONS
Ethereal = Collection.create!({ title: "Ethereal", mood_keywords: ['ethereal', 'inspired', 'happy'], publish_status: false, user_id: BobRoss.id })
UpToYou = Collection.create!({ title: "Up To You, Now", mood_keywords: ['relief', 'tired'], publish_status: false, user_id: AnneWintour.id })
Wild = Collection.create!({ title: "Wild", mood_keywords: ['party', 'fun', 'heady'], publish_status: false, user_id: AnneWintour.id })
BreakFree = Collection.create!({ title: "Break Free", mood_keywords: ['fly like an eagle'], publish_status: false, user_id: AnneWintour.id })

# ENTRIES
Entry.create!({ title: "Finding Inspiration In The Stars", content: "Here I am searching the night sky for shooting stars through my kaleidescope. Listening to St. Vincent and studying Dalí's mind-bending work. Life is good.", collection_id: Ethereal.id })
Entry.create!({ title: "Oh To Be The Real Thing", content: "Every single light, fading for the dark. Oh prediculation, feel the titilation. Know feel real.", collection_id: UpToYou.id })
Entry.create!({ title: "Oh To Be The Real Thing", content: "Every single light, fading for the dark. Oh prediculation, feel the titilation. Know feel real.", collection_id: Wild.id })

# A ARTISTS
StVincent = Artist.create!({ name: "St. Vincent", artist_type: "audio", description: "Anne Erin 'Annie' Clark (born September 28, 1982),[5][6] better known by her stage name St. Vincent, is an American musician, singer-songwriter, and multi-instrumentalist. After studying at Berklee College of Music for three years, she began her music career as a member of the Polyphonic Spree. Clark was also a member of Sufjan Stevens's touring band before forming her own band in 2006.", artist_image: "https://pbs.twimg.com/profile_images/917819850625617926/6Vs1Ae6B.jpg" })
SoftHair = Artist.create!({ name: "Soft Hair", artist_type: "audio", description: "Soft Hair are Connan Mockasin and Sam Dust (LA PRIEST / Late of The Pier). Their eponymous debut album is due for release via Weird World on October 14th 2016. ", artist_image: "https://i.imgur.com/blrMo6M.jpg" })
Queen = Artist.create!({ name: "Queen", artist_type: "audio", description: " ''The epitome of pomp-rock in the Seventies and Eighties, Queen rocked radio and sports stadiums alike with booming, highly produced anthems like 'We Are the Champions' and 'We Will Rock You.' Onstage, the English quartet used elaborate sets smoke bombs, and flashpots — none of which were quite as captivating as the band's lead singer, Freddie Mercury, whose preening and over-the-top vocals helped make Queen wildly popular.", artist_image: "https://i.imgur.com/bdWwHyA.jpg" })
Gorillaz = Artist.create!({ name: "Gorillaz", artist_type: "audio", description: "Gorillaz are an English virtual band created in 1998 by musician Damon Albarn and artist Jamie Hewlett. The band consists of four animated members: 2-D (lead vocals, keyboards), Murdoc Niccals (bass guitar), Noodle (guitar, keyboards) and Russel Hobbs (drums and percussion). These members are fictional and are not personas of any 'real life' musicians involved in the project.Their fictional universe is explored through the band's music videos, as well as a number of other short cartoons. In reality, Albarn is the only permanent musical contributor, and the music is often a collaboration between various musicians. Writers and critics have described their music as alternative rock,trip hop, alternative hip hop, electronica, indie, Britpop, dance-rock, rap rock, dub, reggae and pop.'' - Rolling Stone", artist_image: "https://i.imgur.com/wO7mXQg.jpg" })
Sugarcubes = Artist.create({ name: "The Sugarcubes", artist_type: "audio", description: "The Sugarcubes (Icelandic: Sykurmolarnir) were an Icelandic alternative rock band from Reykjavík formed in 1986 and disbanded in 1992. For most of their career, the band consisted of Björk (vocals, keyboards), Einar Örn Benediktsson (vocals, trumpet), Þór Eldon (guitar), Bragi Ólafsson (bass), Margrét 'Magga' Örnólfsdóttir (keyboards) and Sigtryggur Baldursson (drums). Lead singer Björk would later become an internationally successful solo musician and the best selling Icelandic musician of all time.", artist_image: "https://i.imgur.com/KGe9Eui.jpg" })
BrookeCandy = Artist.create!({ name: "Brooke Candy", artist_type: "audio", description: "Brooke Candy (born July 20, 1989) is an American rapper and singer. She independently released videos for her songs 'Das Me', 'Everybody Does' and 'I Wanna Fuck Right Now'. Candy signed with RCA in February 2014, releasing her debut EP Opulence on May 6, 2014 which features title track as lead and major label debut single. Later she joined Columbia's UK roster. She has since left Sony. Candy's second EP is set to be released in the fall of 2017.", artist_image: "https://i.imgur.com/Du5Rlio.jpg" })
Bjork = Artist.create!({ name: "Björk", artist_type: "audio", description: "Björk Guðmundsdóttir, born 21 November 1965), known as Björk (/ˈbjɜːrk/),is an Icelandic singer, songwriter, actress, record producer, and DJ. Over her four-decade career, she has developed an eclectic musical style that draws on a wide range of influences and genres spanning electronic, pop, experimental, classical, trip hop, IDM, and avant-garde styles. She initially became known as the lead singer of the alternative rock band The Sugarcubes. Björk embarked on a solo career in 1993, coming to prominence as a solo artist with albums such as Debut (1993), Post (1995), and Homogenic (1997), while collaborating with a range of artists and exploring a variety of multimedia projects.", artist_image: "https://i.imgur.com/tbQNmlq.png" })
TameImpala = Artist.create!({ name: "Tame Impala", artist_type: "audio", description: "Tame Impala is an Australian psychedelic rock band founded by Kevin Parker in 2007. The group began as a home recording project for Parker, who writes, records, performs, and produces the music.", artist_image: "https://i.imgur.com/YbrkSQl.jpg" })

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
Audio.create!({ trackName: "Break Free", collectName: "Queen", artistName: "Queen", artworkUrl100: "http://is3.mzstatic.com/image/thumb/Music1/v4/94/92/a3/9492a374-e6e3-8e92-0630-a5761070b0f7/source/100x100bb.jpg", previewUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music1/v4/ff/97/1f/ff971f89-cf18-4b5c-cbc0-b53f1d54803c/mzaf_7209776148394423955.plus.aac.p.m4a", artist_id: Queen.id, collection_id: BreakFree.id })