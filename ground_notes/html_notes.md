# HTML Reference notes

In this HTML reference notes we'll cover the buliding blocks and dive deeper in understanding the foundation of webpages.

## Helpful Links
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
- **Boilerplate and Encoding**:
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


