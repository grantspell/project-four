class CreateVisuals < ActiveRecord::Migration[5.1]
  def change
    create_table :visuals do |t|
      t.string :title
      t.string :visual_url

      t.timestamps
    end
  end
end
