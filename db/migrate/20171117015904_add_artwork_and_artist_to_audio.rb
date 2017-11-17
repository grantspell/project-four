class AddArtworkAndArtistToAudio < ActiveRecord::Migration[5.1]
  def change
    add_column :audios, :artworkUrl100, :string
    add_column :audios, :artistName, :string
  end
end
