class AddCollectionToEntry < ActiveRecord::Migration[5.1]
  def change
    add_reference :entries, :collection, foreign_key: true
  end
end
