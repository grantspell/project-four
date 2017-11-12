class AddArtistToAudio < ActiveRecord::Migration[5.1]
  def change
    add_reference :audios, :artist, foreign_key: true
  end
end
