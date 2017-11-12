class AddCollectionToVisual < ActiveRecord::Migration[5.1]
  def change
    add_reference :visuals, :collection, foreign_key: true
  end
end
