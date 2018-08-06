Post::HABTM_Tags.create!([
  {post_id: 1, tag_id: 2},
  {post_id: 2, tag_id: 2},
  {post_id: 2, tag_id: 4}
])
Tag::HABTM_Posts.create!([
  {post_id: 1, tag_id: 2},
  {post_id: 2, tag_id: 2},
  {post_id: 2, tag_id: 4}
])
Post.create!([
  {title: "This Is A Test Post", description: "description 1", content: "With `​cool`​ stuff\n\n```ruby\nand\nlots of code\n// yo\n```\n\nPicture 1\n\n![Screen Shot 2018-07-18 at 21.21.48.png](https://i.imgur.com/Fo8kEDt.png)\n\nPicture 2\n\n![Screen Shot 2018-07-22 at 11.37.45.png](https://i.imgur.com/Gjm5fhM.png)\n\nEven Moreee\n\n![Screen Shot 2018-07-18 at 21.21.59.png](https://i.imgur.com/ibMHu6Z.png)", cover_image: "https://i.imgur.com/HNNxeSP.png", slug: "this-is-a-test-post"},
  {title: "Test Post 2", description: "ANOTHER POST YA", content: "With `​cool`​ stuff and THE BEST **STUFF**\n\n```ruby\nand\nlots of code\n// yo\n```\n\nPicture 1\n\n![Screen Shot 2018-07-18 at 21.21.48.png](https://i.imgur.com/1K6iEPz.png)\n\nPicture 2\n\n![Screen Shot 2018-07-22 at 11.37.45.png](https://i.imgur.com/uLvw4P7.png)\n\nEven Moreee\n\n![Screen Shot 2018-07-18 at 21.21.59.png](https://i.imgur.com/zWebLvU.png)", cover_image: "https://i.imgur.com/6JmCLIe.jpg", slug: "test-post-2"}
])
Tag.create!([
  {name: "tag1", slug: "tag1", title: "Tag1"},
  {name: "general tag", slug: "general-tag", title: "General Tag"},
  {name: "tag 2", slug: "tag-2", title: "Tag 2"},
  {name: "anothertag", slug: "anothertag", title: "Anothertag"}
])
