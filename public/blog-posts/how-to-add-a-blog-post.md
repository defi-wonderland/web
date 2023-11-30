# How To Add a Blog Post

To seamlessly integrate a blog post, follow these steps.

## 1. Blog Post Markdown File

Add your blog post in Markdown format to `./public/blog-posts/`. Keep the file name consistent with the blog post title.

```plaintext
./public/blog-posts/[title-of-the-blog-post].md
```

## 2. Image Management

Place relevant images in `./public/img/blog-posts/[title-of-the-blog-post]/`.

```plaintext
./public/img/blog-posts/[title-of-the-blog-post]/[image].[png/jpg/svg]
```

## 3. Image Paths in Markdown

Ensure correct image paths in your Markdown file. Example:

```markdown
![Cover Image](../img/blog-posts/[title-of-the-blog-post]/cover.jpg)
```

## 4. Metadata in blog.json

Add post metadata to `./src/data/blog.json` following this format:

```js
{
  "id": "a-mev-racing-story",
  "name": "A (MEV) Racing Story",
  "description": "What do we know about the dark forest 2.0?",
  "date": "05/04/23",
  "tags": ["MEV", "Flashbots"],
  "image": "/img/blog-posts/a-mev-racing-story/cover.jpg"
},
// next blog posts...
```

## Optimization Tips

- **Image Optimization:**

  - Use tools like [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/) to reduce image size with the following recommended settings:
    - Reduce Palette.
    - Use MozJPEG with 70-75% quality.
    - Reduce size to max of 1600px.
  - Aim for images under 300kB for optimal performance.

- **Image Formats:**
  - PNG for transparency.
  - JPG for non-transparent images.
  - SVG for logos.
