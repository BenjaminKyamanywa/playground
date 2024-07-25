# 🏪 Building a products filter

We are going to explore some Javascript array functions by building a products filter application using HTML, CSS and Javascript. We'll utilize the `map`, `filter`, `reduce` ES6 functions understanding their roles and implementations.

Imagine we have inventory products in a store and we need to filter through them based on the categories.

## Topics
- [A glimpse into our markup](#a-glimpse-into-our-markup)
- [CSS Highlights](#css-highlights)
- [Uncovering our JS](#uncovering-our-js)
- [Lessons](#lessons)
- [Conclusion](#conclusion)

### A glimpse into our markup

___

Here we set up our structure for the inputs and labels for the variables we'll be changing.

```HTML

<div class="container">
      <h1>Inventory</h1>
      <div id="categories"></div>
      <h2>Product List</h2>
      <ul id="product-list"></ul>
      <h2>Total Prices</h2>
      <div id="totals"></div>
    </div>

```

- `<div id="categories">`: Displays checkboxes for filtering product categories.
- `<ul id="product-list">`: Lists products based on selected categories.
- `<div id="totals">`: Container for displaying total prices dynamically.


### CSS Highlights

___

We'll go over our variable styles and base styling for our page.


```CSS


.container {
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

/* Additional styles for checkboxes, product list items, etc. */


```

- `.container`: Provides structure and styling to the main content area.
- `h1, ul, li`: Ensures consistent typography and list styling.

### Uncovering our JS

___

We'll uncover our Javascript and go over our funtions, event listeners and the variable changes.

```JS



```

- Main Item:
    - `categories.map(({ category }) => category)`: Maps over the `products` array to extract unique categories using destructuring and object shorthand notation.
- Main item:
    - `products.filter(product => selectedCategories.includes(product.category))`: Filters the `products` array based on selected categories using the `includes` method to check if the product's category is included in `selectedCategories`.
- Main item:
    - `products.reduce((totals, product) => { ... }, {})`: Reduces the `products` array to calculate total prices for each category by accumulating prices into an object (`totals`).

### Lessons
___

1. Main Item:
    - Sub item

2. Main Item:
    - Sub item

3. Main Item:
    - Sub Item

### Conclusion
___

We explored how HTML, CSS, and JavaScript collaborate to create an interactive filter of products inventory. By exploring the functions map, filter, and reduce, you've gained insight into their practical applications in manipulating data and enhancing user experiences on the web.

Remember, with these tools and dedicated practice, we can create amazing designs on the web!

You can view the project on Codepen [Here](). 
