// Sample product data
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Keyboard', price: 80, category: 'Electronics' },
  { name: 'Mug', price: 10, category: 'Home' },
  { name: 'Plant', price: 25, category: 'Home' },
  { name: 'Headphones', price: 200, category: 'Electronics' },
  { name: 'Sunglasses', price: 50, category: 'Fashion' },
];

// display products
const displayProducts = (products) => {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  // forEach to add a product to each list item
  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    productList.appendChild(li);
  });
}

// display and filter categories
const displayCategories = () => {
  const categories = [...new Set(products.map(({category}) => category))];
  const categoriesContainer = document.getElementById('categories');
  categoriesContainer.innerHTML = '';

  categories.forEach((category) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = category;
    input.addEventListener('change', filterProducts)
    label. appendChild(input);
    label.appendChild(document.createTextNode(category));
    label.classList.add('category');
    categoriesContainer.appendChild(label);
  });
}

// filter products
const filterProducts = () => {
  const selectedCategories = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(input => input.value);

  // return all products if no category is selected
  if (selectedCategories.length === 0) {
    displayProducts(products);
    return;
  }

  const filteredProducts = products.filter(product => selectedCategories.includes(product.category));
  displayProducts(filteredProducts);
}

// call functions
displayCategories();
displayProducts(products);