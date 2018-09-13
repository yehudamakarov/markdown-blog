Markdown Blog
=============

A blog with an admin panel that creates blog posts from markdown files. Especially those exported by Quiver.

### Demo

Youtube:
https://youtu.be/x0sqcPddlok

### Installation

1. You can start by forking and cloning this repository.
2. Navigate to the directory and run `bundle install`​.
3. Run `rails c`​.
4. Enter `User.create(email: <your email address here>, password: <your password here>)`​. You just made your admin account. Type `​exit`​ and hit enter to exit the console.
5. Run `​rake start`​. You should have just booted up the backend as well as the front end in your default browser.
6. This initial view should be the home page that visitors see.
7. To access your admin panel, visit `​/admin`​.
8. Log in with the email and password you entered at step 4.

### Usage

The `new` form has the functionality you would need to make a blog post. The image upload in the form is for a cover image. The one on the bottom is for any images in the post.

If you exported the markdown you are using from quiver, any of the images that came with that file can be used to programatically fix the image tags in the markdown. Simply upload them to Imgur using the bottom of the form, and push the `correct tags` button.

You can keep adding posts. When done, visit the edit tab to see a live preview of the blog. You can edit and delete posts as necessary from there.

### Contribute

Please feel free to contribute. Just open a pull request. If something is wrong or doesn't work, see if you can figure out why. If you can't, reach out to me or file an issue on Github. \<3.

Bug reports and pull requests are welcome on GitHub at [https://github.com/yehudamakarov/markdown-blog](https://github.com/yehudamakarov/inspiration-please.).

### License

This product is registered under the MIT License - Copyright (c) 2018 Yehuda (Nikita) Makarov. See `./LICENSE`.