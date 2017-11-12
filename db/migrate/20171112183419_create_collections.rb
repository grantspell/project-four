class CreateCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :collections do |t|
      t.string :title
      t.text :mood_keywords, array: true, default: []
      t.boolean :publish_status

      t.timestamps
    end
  end
end
