class AddCollectionToAudio < ActiveRecord::Migration[5.1]
  def change
    add_reference :audios, :collection, foreign_key: true
  end
end
