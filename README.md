### markdown-blog

A blog with an admin panel that creates blog posts from markdown files. Especially those exported by Quiver.

### Installation

1. You can start by forking and cloning this repository.
2. Navigate to the directory and run `rails c`​.
3. Enter `User.create(email: <your email address here>, password: <your password here>)`​. You just made your admin account. `​exit`​ the console.
4. Run `bundle install`​
5. Run `​rake start`​. You should have just booted up the backend as well as the front end in your default browser.
6. To access your admin panel, visit `​/admin`​.

### Usage

The `new` form has the common functionality you would need to make a blog post. The image upload in the form is for a cover image. The one on the bottom is for any images in the post.

If you exported the markdown you are using from quiver, any of the images that came with that file can be programatically fixed in place. Simply upload them to Imgur using the bottom of the form, and push the `correct tags` button.

You can keep adding posts. When done, visit the edit tab to see a live preview of the blog. You can edit and delete posts as necessary from there.

###