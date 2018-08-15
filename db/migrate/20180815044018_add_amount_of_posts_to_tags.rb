class AddAmountOfPostsToTags < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :amount_of_posts, :integer
  end
end
