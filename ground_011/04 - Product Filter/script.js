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
  
}

// call functions
displayProducts(products);