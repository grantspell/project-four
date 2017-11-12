class AddArtistToVisual < ActiveRecord::Migration[5.1]
  def change
    add_reference :visuals, :artist, foreign_key: true
  end
end
