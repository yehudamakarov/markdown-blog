class AddTitlesToTags < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :title, :string
  end
end
