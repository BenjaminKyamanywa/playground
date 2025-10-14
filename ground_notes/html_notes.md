# HTML Reference notes

In this HTML reference notes we'll cover the buliding blocks and dive deeper in understanding the foundation of webpages.

## Helpful Links
  - FreeCodeCamp HTML basic review: https://www.freecodecamp.org/learn/full-stack-developer/review-basic-html/basic-html-review
  - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/HTML
  - W3C Schools: https://www.w3schools.com/html/

## Topics
  - [Introductions](#introduction)
  - [Common HTML Elements](#common-html-elements)

## Introduction

- **HTML**: Hyper Text Mark Up Language: It represents the content structure of a webpage.
- **HTML Elements**: The building blocks of an HTML document and these are represented by headings, paragraphs, images, links etc. They are represented by opening and closing tags `<element></element>` e.g `<p></p>`

The basic syntax:

```HTML
<element>This is where we add content</element>
```

- **Void elements**: These cannot have any content inside them. They only have a start tag. e.g `<img>` & `<meta>` elements. Sometimes we can add a slash at the end or not, either option is acceptable as some codebases utilize the slashes format. e.g `<img/>`.
- Attributes: Provide additional information about an element or specify how it should behave. These are placed inside the opening tag of an HTML element. We have boolean attribute values that are true by false and are optional e.g `required`, `disabled`, `readonly`

```HTML
<element attribute="value"></element>
```

- **Comments**: Utilized in programming to leave notes for ourselves and other developers about our code, TODO tasks and anything relevant.

```HTML
<!-- This is an HTML comment -->
```

## Common HTML Elements

- **Heading Elements**: We have six of these from `h1` through `h6` and the higher the number the lower the importance. For instance `h6` has a lower importance than `h2`.

```HTML
<h1>most important heading element</h1>
<h2>second most important heading element</h2>
<h3>third most important heading element</h3>
<h4>fourth most important heading element</h4>
<h5>fifth most important heading element</h5>
<h6>least important heading element</h6>
```

- **Paragraph Elements**: Used to add paragraphs on webpages.

```HTML
<p>This is a paragraph element</p>
```

- **img element**: Used to add images to a webpage. It's good practise to add a `src` attribute that's used to add a link to the source of an image and an `alt` attribute to add a description of an image.

```HTML
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
```

- **body**: Used to represent the entire content of the HTML document.

```HTML
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph</p>
</body>
```

- **section** Element: Used to divide up webpage content into smaller sections. It provides semantic meaning indicating a particular grouping of content.

```HTML
<section>
  <h2>About Us Page</h2>
  <p>I am on a journey of mastery of my craft. Dedicating every waking moment.</p>
</section>
```

- **div** Element: Generic HTML element that doesn't have any semantic meaning and is used to contain other HTML elements.

```HTML
<div>
  <h3>This is a heading</h3>
  <p>Day and night I'll dedicate myself to mastery.</p>
<div>
```

- **anchor `<a></a>`**: Used to add links onto a webpage. The `href` attribute specifies the destination of the link.

```HTML
<a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute cats</a>
```

- Lists:
  - **Ordered List <ol></ol>**: Used to create list items that are ordered in order.
  ```HTML
  <ol>
    <li>Shoes</li>
    <li>Hat</li>
    <li>Pin</li>
  </ol>
  ```

  - **Unordered List <ul></ul>**: Used to create list items that are not in any specific order.
  ```HTML
  <ul>
    <li>Susan</li>
    <li>Doe</li>
    <li>Pete</li>
  </ul>
  ```

- **Emphasis <em>**: Used to place strong emphasis on a piece of text.
```HTML
  <p>Look at that <em>tall</em> building.</p>
```

- **strong <strong></strong>**: Used to place strong emphasis on text to indicate a sense of urgency and seriousness.
```HTML
<p>Make sure you <strong>wear</strong> your safety googles</p>
```

- **figure** and **figcaption**: figure element is used to group contents like images and diagrams while the figcaption element is used to represent a caption for that content inside the figure element.

```HTML
<figure>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">
  <figcaption>Cats <strong>love</strong> other cats.</figcaption>  
</figure>
```

- **main**: Element used to contain the primary content area of a webpage such as the main article, blog post or an applications main functionality. It should containg the central topic of a page excluding navigation, search, copyright elements. There should only be one main element.

```HTML
<main>
  <h1>Apples</h1>
  <p>The apple is the pomaceous fruit of the apple tree.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>
      These bright red apples are the most common found in many supermarkets.
    </p>
    <p>…</p>
    <p>…</p>
  </article>
</main>
```

- **footer**: Used at the bottom of a webpage to add copyright information and other important links

```HTML
<footer>
  <p>
    No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
  </p>
</footer>
```

- **Identifiers and Grouping**
  - **ID Identifiers <p id="unique"></p>**: Unique element identifiers that should be used once per HTML element. There cannot be spaces for an ID identifier, if there are many words then use dashes or underscores to connect each word.
  ```HTML
    <h1 id="title">Movie Review Page</h1>
    <h1 id="title-review-page">Title Review Page</h1>
  ```

  - **Class identifier**: Used to group elements for styling. Can be re-used throughout elements and can have spaces. Also, dashes and underscores can be used as well.
  ```HTML
    <div class="box red-box"></div>
    <div class="box blue-box"></div>
  ```
- **Special Characters and Linking**:
  - **HTML Entities**: Character references to represent reserved characters in HTML. E.g ampersand `&amp;` and less than symbol `&lt;`
  ```HTML
  <p>This is an &lt; img /&gt; element </p> <!-- This is an < img /> element  -->
  ```
  - **link**: Used to link to external sources such as stylesheets and icons. It utilizes an `href` attribute that specifies the location of the URL for the external resource. Used in the head section of a webpage.
  ```HTML
  <link rel="stylesheet" href="styles.css">
  ```
  - **script**: Utilized to contain our Javascript code. Additionally, used to link to external script source files which is considered as the best practise. We utilize the `src` attribute to add the path to the external file.
  ```HTML
  <script>
    alert("Hello wordl!");
  </script>
  <!-- linking to external script files -->
  <script src="path-to-javasript-file.js"></script>
  ```
## Boilerplate and Encoding
  - **HTML Boilerplate**: A skeletal template presentation that includes the basic structure and essential elements every HTML document needs.
  ```HTML
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
      <!-- Headings, sections, paragraphs, images -->
    </body>
  </html>
  ```
  - `DOCTYPE`: Specifies to browsers the HTML version of the webpage.
  - `html`: Specifies the top level or root of the HTML document.
  - `head`: Contains important behind the scenes meta data needed for browsers and search engines.
  - `meta`: Represent meta data for a webpage, and contain information like character encoding and how social sites liken Twitter preview a page's link.
  - `title`: Sets text that appears in the browser tab. 
  - `body`: Contains all the content viewed by users on a webpage. 

- **SEO & Social Sharing**
  - **SEO**: Search Engine Optimization is a practice that optimizes webpages so they become more visible and rank higher on search engines.
  - **Meta description**: Utilized to add a short description for the webpage that search engines read and contribute to SEO.
  ```HTML
    <meta name="description" content="Discover expert tips and techniques for gardening in small spaces, choosing the right plants, and maintaining a thriving garden."/>
  ```
  - **open graph tags**: Enables control over how a website's content appears across various social media platforms e.g Facebook, LinkedIn. Open Graph properties entice users to want to engage with webpage content. They can be set utilizing `meta` elements in the `head` section of a webpage.
  ```HTML
  <!-- og:title - Sets title that displays for social media posts -->
  <meta property="title" content="exampleWebsite.org">
  <!-- og:type - Represents the type of content being shared on social  -->
  <meta property="type" content="website">
  <!-- og:image - Sets the image shown on social media content -->
  <meta property="og:image" content="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"/>
  <!-- og:url - Sets the URL users click on for social media conent/posts -->
  <meta property="og:url" content="https://www.freecodecamp.org" />
  ``` 

- Media Elements & Customization
  - **Replaced elements**: Content is determined by external resources rather than CSS. E.g `iframe - inline frame` element which is used to embed other HTML content directly within an HTML page.
  ```HTML
  <iframe src="https://www.example.com" title="Example site"></iframe>
  ```
  We can add additional attributes e.g fullscreen which enables a user display an iframe in fullscreen. Mostly these are generated by other websites for sharing of content especially video services such as Youtube, Vimeo
  ```HTML
  <iframe
  src="video-url"
  width="width-value"
  height="height-value"
  allowfullscreen>
  </iframe>  

  <!-- Example popular freecodecamp Youtube embed -->
  <h1>A freeCodeCamp YouTube Video Embedded with the iframe Element</h1>

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/PkZNo7MFNFg?si=-UBVIUNM3csdeiWF"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
  ```

  - Examples of other replace elements: `embed`, `video`. Some behave as replaced elements under specific circumstances. E.g `input` element with the `type` attribute set to `image`:

  ```HTML
    <input type="image" alt="Descriptive text goes here" src="example-img-url">
  ```

  - **Optimizing media**:Size, format and compression are three things to consider while working with media such as images and videos. Compressing them using online tools helps to reduce the file size and as such they load faster.
  - **Image formats**: JPG & PNG are two of the most common image file formats however, they are not ideal. WEBP or AVIF are more optimized and modern formats that are recommended for image formats.
  - **Image licenses**: Public domain images have no copyright and are free to use without restrictions. E.g Creative Commons 0 licens. Some images can be released under a permitted Creative Commons License, or BSD (Berkeley Software Distribution) that FreeCodeCamp uses.
  - **SVGs**: These track data based on paths and equations to plot points, lines and curves which means as vector graphics that they can be scaled without losing quality.

## Mutlimedia Integration

- **audio and video**: Are used to add both audio and video to HTML documents. Supported audio formats include mp3, wav, ogg. Video formats include mp4, ogg, webm formats.

```HTML
<audio src="audioFileSource.mp3" loop controls></audio> 
<!-- 
 - Controls (boolean) attribute: To see audio controls which enables users manage audio playback, adjusting volume, pausing, resuming playback.
 - Loop attribute: audio replays continuously.
 - Muted attribute: audio starts in a muted state.
-->

```

- **source element**: can be used in the audio element to add different audio file sources as there are differences with what browsers accept.

```HTML

<audio controls>
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.wav" type="audio/wav">
  <source src="audio.mp3" type="audio/mpeg">
</audio>

```

- **video controls**: all the attributes we've utilized with audio controls can also be used for the video element.

```HTML
<!-- loop, contorls, muted attributes with video element -->
<video
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  loop
  controls
  muted
></video>
```

- **poster attribute**: Used to display an image while a video is downloading. Only available for video element.

```HTML
<video
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  loop
  controls
  muted
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620"
></video>
```

## Target attribute types

- **target attribute**: Tells a browser where to open the URL for the anchor element. It has four possible values `_self`, `_blank`, `_parent`, `_top`. There's a fifth value `_unfencedTop`, currently used for the experimental `FencedFrame` API and there won't be a reason to use it yet. 
- **`self` Value**: Default value for `target` attribute and opens the URL in the current browser tab or window.

```HTML
<a href="https://freecodecamp.org" target="_self">Visit freeCodeCamp</a>
```

- **`_blank` Value**: Opens the link in new browsing context. Typicaly within a new browser tab. Some users may configure their browsers to open a new window instead.

```HTML
<a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
```
- **`–parent` Value**: Opens a link in the parent element of the current context. E.g if a site has an iframe a `_parent` value within the iframe would open in the website's tab/window, not in the embedded iframe.

```HTML
<a href="https://freecodecamp.org" target="_parent">Visit freeCodeCamp</a>
```
- **`–top` Value**: Opens a link in the top most browsing context - "think parent of the parent". It's similar to `_parent` but the link will always open in the full browser tab/window even for nested frames.

```HTML
<a href="https://freecodecamp.org" target="_top">Visit freeCodeCamp</a>
```

## Absolute Vs Relative Paths

- **Path definition**: A path is a string that defines the location of a file or directory in a file system. In web devt paths let developers link resources like images, stylesheets, scrips and other web pages.
- **Path Syntax**: Three syntaxes to be known, first is a slash which can be a backslash (\) or forward slash (/) depending on operating system. Second is a single dot (.) and finally a double dot (..). A path is known as a separator used to indicate a break in the text between folder or filenames. A single dot points to a current directory while double dots point to a parent directory.

```HTML
public/index.html
./favicon.ico
../src/index.css
```

- **Absolute Path**: Its a complete link to a resource. It starts from the root directory, includes every other directory and finally filename and extension. "Root directory" refers to the top level directory or folder in a hierachy. It also includes the protocol e.g `http`, `https` and `file` plus a domain name if the resource is on the web. E.g below that leads to FCC logo.

```HTML
<a href="https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg">
  View fCC Logo
</a>
```


  



