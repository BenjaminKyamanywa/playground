# HTML Reference notes

In this HTML reference notes we'll cover the buliding blocks and dive deeper in understanding the foundation of webpages.

## Helpful Links
  - MDN Docs:https://developer.mozilla.org/en-US/docs/Web/HTML
  - W3C Schools:https://www.w3schools.com/html/

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