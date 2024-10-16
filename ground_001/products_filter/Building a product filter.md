# 🏪 Building a products filter using `map`, `filter`, `reduce`

We are going to explore some Javascript array functions by building a products filter application using HTML, CSS and Javascript. We'll utilize the `map`, `filter`, `reduce` ES6 functions understanding their roles and implementations.

Imagine we have inventory products in a store and we need to filter through them based on the categories.

## Topics
- [A glimpse into our markup](#a-glimpse-into-our-markup)
- [CSS Highlights](#css-highlights)
- [Uncovering our JS](#uncovering-our-js)
- [Key Take Aways](#key-take-aways)
- [Conclusion](#conclusion)

### A glimpse into our markup

___

Here we set up our structure for the categories, product list and totals we'll be displaying.

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

We'll go over our key styles for our app.


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

We'll uncover in depth our Javascript and go over our functions, event listeners and the map, filter and reduce functions.

```JS

// Function to display products 
const displayProducts = (products) => {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    productList.appendChild(li);
  });

  calculateTotals(products); // Calculate totals whenever products are displayed
};


```

- `displayProducts` function dynamically displays a list of products on the webpage.
- We iterate through the `products` array using `forEach` to create list items (`<li>`) for each product, showing its name and price.
- It helps provide real-time product updates based on user interactions (like filtering), enhancing user experience by displaying relevant information dynamically.

```JS

// Function to display categories and handle filtering 
const displayCategories = () => {
  const categories = [...new Set(products.map(({ category }) => category))];
  const categoriesContainer = document.getElementById('categories');
  categoriesContainer.innerHTML = '';

  categories.forEach(category => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = category;
    input.addEventListener('change', filterProducts);
    label.appendChild(input);
    label.appendChild(document.createTextNode(category));
    label.classList.add('category');
    categoriesContainer.appendChild(label);
  });

  setTimeout(() => calculateTotals(products), 0); // Calculate initial totals for all products
};

```

- `displayCategories` function generates checkboxes for product categories and sets up event listeners for filtering.
- It utilizes `map` and `forEach` to extract unique categories from products and create checkboxes dynamically.
- Allows users to filter products by categories, improving usability and functionality of the application.

```JS

// Function to filter products based on selected categories
const filterProducts = () => {
  const selectedCategories = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(input => input.value);
  
  if (selectedCategories.length === 0) {
    displayProducts(products);
    return;
  }

  const filteredProducts = products.filter(product => selectedCategories.includes(product.category));
  displayProducts(filteredProducts);
};

```

- `filterProducts` function filters products based on selected categories from the checkboxes.
- We use `filter` to create a subset of `products` that match selected categories.
- It enables dynamic product filtering without page reloads, providing users with tailored content based on chosen options.

```JS

// Function to calculate and display total price for each category
const calculateTotals = (products) => {
  const totalsContainer = document.getElementById('totals');

  // Check if totalsContainer exists before manipulating it
  if (!totalsContainer) {
    console.error('Element with id "totals" not found.');
    return;
  }

  totalsContainer.innerHTML = '';
  const categoryTotals = products.reduce((totals, product) => {
    if (!totals[product.category]) {
      totals[product.category] = 0;
    }
    totals[product.category] += product.price;
    return totals;
  }, {});

  // Display totals with headings for each category
  Object.keys(categoryTotals).forEach(category => {
    const categoryTotalContainer = document.createElement('div');
    categoryTotalContainer.classList.add('category-total');

    const heading = document.createElement('h3');
    heading.textContent = `${category}:`;

    const total = document.createElement('p');
    total.textContent = `$${categoryTotals[category]}`;

    categoryTotalContainer.appendChild(heading);
    categoryTotalContainer.appendChild(total);
    totalsContainer.appendChild(categoryTotalContainer);
  });
};

```

- `calculateTotals` function computes and displays total prices for each category.
- We use `reduce` to aggregate prices based on each category, creating an object (`categoryTotals`) with cumulative sums.
- This offers a summary of expenses by category, enhancing transparency and decision-making for users.

#### Usage of our Javascript array functions

---

- `Map` usage:
    - `categories.map(({ category }) => category)`: Maps over the `products` array to extract unique categories using destructuring and object shorthand notation.
- `Filter` usage:
    - `products.filter(product => selectedCategories.includes(product.category))`: Filters the `products` array based on selected categories using the `includes` method to check if the product's category is included in `selectedCategories`.
- `Reduce` usage:
    - `products.reduce((totals, product) => { ... }, {})`: Reduces the `products` array to calculate total prices for each category by accumulating prices into an object (`totals`).

### Key Take Aways
___

1. Functional Iteration:
    - Functions like `forEach`, `map`, `filter`, and `reduce` facilitate efficient data manipulation and iteration over arrays, enabling dynamic content updates in our application.

2. Event-Driven Interaction:
    - Event listeners (`addEventListener`) paired with functions like `filterProducts` allow for responsive user interactions, such as filtering products based on selected checkboxes.

3. Data Transformation:
    - `map` and `reduce` empowers us to transform and aggregate data flexibly, optimizing performance and enhancing user experience by presenting data in meaningful ways.

4. Modular Code Structure:
    - Organizing code into modular functions such as (`displayProducts`, `displayCategories`) promotes maintainability and scalability, making it easier to debug and extend functionality of our application.

### Conclusion
___

We explored how HTML, CSS, and JavaScript collaborate to create an interactive filter of products inventory. By exploring the functions map, filter, and reduce, you've gained insight into their practical applications in manipulating data and enhancing user experiences on the web.

Remember, with these tools and dedicated practice, we can create amazing apps on the web!

You can view the project on Codepen [Here](https://codepen.io/benjaminkyamanywa/pen/mdZrvdr). 