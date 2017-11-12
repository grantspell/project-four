class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :type
      t.text :description
      t.string :artist_image

      t.timestamps
    end
  end
end
