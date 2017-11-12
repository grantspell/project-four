class CreateAudios < ActiveRecord::Migration[5.1]
  def change
    create_table :audios do |t|
      t.string :song
      t.string :album
      t.string :audio_url

      t.timestamps
    end
  end
end
