class UpdateAudioColumnNames < ActiveRecord::Migration[5.1]
  def change
    rename_column :audios, :song, :trackName
    rename_column :audios, :album, :collectionName
    rename_column :audios, :audio_url, :previewUrl
  end
end
