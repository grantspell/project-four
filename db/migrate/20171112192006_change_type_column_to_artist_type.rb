class ChangeTypeColumnToArtistType < ActiveRecord::Migration[5.1]
  def change
    rename_column :artists, :type, :artist_type
  end
end
