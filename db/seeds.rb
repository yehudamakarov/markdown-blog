Post::HABTM_Tags.create!([
  {post_id: 1, tag_id: 1},
  {post_id: 1, tag_id: 2}
])
Tag::HABTM_Posts.create!([
  {post_id: 1, tag_id: 1},
  {post_id: 1, tag_id: 2}
])
Post.create!([
  {title: "This Is A Test Post", description: "description 1", content: "With `​cool`​ stuff\n\n```ruby\nand\nlots of code\n// yo\n```\n\nPicture 1\n\n![Screen Shot 2018-07-18 at 21.21.48.png](https://i.imgur.com/Fo8kEDt.png)\n\nPicture 2\n\n![Screen Shot 2018-07-22 at 11.37.45.png](https://i.imgur.com/Gjm5fhM.png)\n\nEven Moreee\n\n![Screen Shot 2018-07-18 at 21.21.59.png](https://i.imgur.com/ibMHu6Z.png)", cover_image: "https://i.imgur.com/HNNxeSP.png", slug: "this-is-a-test-post"}
])
Tag.create!([
  {name: "tag1", slug: "tag1", title: "Tag1"},
  {name: "general tag", slug: "general-tag", title: "General Tag"}
])
