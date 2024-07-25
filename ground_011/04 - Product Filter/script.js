// Sample product data
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Keyboard', price: 80, category: 'Electronics' },
  { name: 'Mug', price: 10, category: 'Home' },
  { name: 'Plant', price: 25, category: 'Home' },
  { name: 'Headphones', price: 200, category: 'Electronics' },
  { name: 'Sunglasses', price: 50, category: 'Fashion' },
];

// Function to display products using ES6 arrow function
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

// Function to display categories and handle filtering using ES6 arrow function
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

// Function to filter products based on selected categories using ES6 arrow function
const filterProducts = () => {
  const selectedCategories = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(input => input.value);
  
  if (selectedCategories.length === 0) {
    displayProducts(products);
    return;
  }

  const filteredProducts = products.filter(product => selectedCategories.includes(product.category));
  displayProducts(filteredProducts);
};

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

// Initial setup
displayCategories();
displayProducts(products);
