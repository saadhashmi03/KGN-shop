// Original products, split the double image ones into single image products
const products = [
  { name: "imported Mona Satin ", price: "₹400", imgFront: "images/is1.jpg", rating: 4, category: "hijab" },
  { name: "HD fabric ", price: "₹400", imgFront: "images/is2.jpg", rating: 4.5, category: "hijab" },
  { name: "HD fabric ", price: "₹400", imgFront: "images/is3.jpg", rating: 4.5, category: "hijab" },
  { name: "imported Mona Satin ", price: "₹400", imgFront: "images/is4.jpg", rating: 4, category: "hijab" },
  {name:"Organza Hijab" ,price:"350", imgFront:"images/is5.jpg", rating: 4.5 , category:"hijab"},
  { name: "Shimmer Hijab", price: "₹350", imgFront: "images/is6.jpg", rating: 4.5, category: "hijab" },
  { name: "Regular Hijab", price: "₹350", imgFront: "images/is7.jpg", rating: 4.5, category: "hijab" },
  { name: "Regular Burkha ", price: "₹2100", imgFront: "images/nk1.jpg", rating: 4.5, category: "niqab" },
  { name: "Embroidry Work india ", price: "₹400", imgFront: "images/nk10.jpg", rating: 4, category: "niqab" },
  { name: "Embroidry Work india ", price: "₹400", imgFront: "images/nk9.jpg", rating: 4, category: "niqab" },
  { name: "parda collection", price: "₹350", imgFront: "images/nk5.jpg", rating: 4.5, category: "hijab" },
  { name: "Regular burkha ", price: "₹2100", imgFront: "images/nk6.jpg", rating: 4.5, category: "niqab" },
  { name: "Parda new collection ", price: "₹350", imgFront: "images/nk4.jpg", rating: 4.5, category: "hijab" },
  { name: "Parda new collection ", price: "₹350", imgFront: "images/nk3.jpg", rating: 4.5, category: "hijab" },
  { name: "Dubai Imported Georgette Abaya ", price: "₹2550", imgFront: "images/nk12.jpg", rating: 4.5, category: "niqab" },
  { name: "Dubai Imported Georgette Abaya ", price: "₹2550", imgFront: "images/nk13.jpg", rating: 4.5, category: "niqab" },
  { name: "Parda new collection ", price: "₹350", imgFront: "images/nk2.jpg", rating: 4.5, category: "hijab" },
  { name: "Simple Burkha ", price: "₹2100", imgFront: "images/nk8.jpg", rating: 4.5, category: "niqab" },
  { name: "CY Fabric Burkha ", price: "₹2300", imgFront: "images/nk11.jpg", rating: 4.5, category: "niqab" },
  { name: "Indian Imported Burkha ", price: "₹2300", imgFront: "images/nk14.jpg", rating: 4.5, category: "niqab" },
  { name: "Indian Imported Burkha ", price: "₹1800", imgFront: "images/nk15.jpg", rating: 4.5, category: "niqab" },
  { name: "Nida Dubai Collection ", price: "₹2700", imgFront: "images/nk16.jpg", rating: 4.5, category: "niqab" },
  { name: "Embroidery Dubai Collection ", price: "₹3500", imgFront: "images/nk17.jpg", rating: 4.5, category: "niqab" },
  { name: "Nida Indian Collection ", price: "₹3500", imgFront: "images/nk18.jpg", rating: 4.5, category: "niqab" },
  { name: "Indian Fabric ", price: "₹2250", imgFront: "images/nk19.jpg", rating: 4.5, category: "niqab" },
  { name: "Imported Dubai Collection ", price: "₹3500", imgFront: "images/nk0.jpg", rating: 4.5, category: "niqab" },
  {name:"Imported Mona Satin" ,price:"₹400", imgFront:"images/hijab.jpg", rating: 4.5 , category:"hijab"},
  {name:"HD Fabric " ,price:"₹400", imgFront:"images/hijab1.jpg", rating: 4.5 , category:"hijab"},
  {name:"Imported Mona Satin" ,price:"₹400", imgFront:"images/hijab3.jpg", rating: 4.5 , category:"hijab"},
  {name:"New Parda Collection" ,price:"₹350", imgFront:"images/hijab4.jpg", rating: 4.5 , category:"hijab"},
  {name:"New Parda Collection" ,price:"₹350", imgFront:"images/hijab5.jpg", rating: 4.5 , category:"hijab"},
];


// Function to render the products// Function to render the products
function renderProducts(productsToRender) {
  const productList = document.getElementById("product-list");
  if (!productList) return;

  productList.innerHTML = ''; // Clear existing products

  productsToRender.forEach((product) => {
    // Create the product box
    const productBox = document.createElement("div");
    productBox.classList.add("box");

    // Product image
    const productImage = document.createElement("div");
    productImage.classList.add("image");
    const img = document.createElement("img");
    img.src = product.imgFront;
    img.alt = product.name || 'No name available'; // Handle missing product name
    productImage.appendChild(img);

    // Product content
    const productContent = document.createElement("div");
    productContent.classList.add("content");
    const productName = document.createElement("h3");
    productName.textContent = product.name || 'Unnamed Product'; // Handle missing name

    const productPrice = document.createElement("div");
    productPrice.classList.add("price");
    productPrice.textContent = product.price || 'Price not available'; // Handle missing price

    // Shop Now button
    const shopNowButton = document.createElement("a");
    shopNowButton.classList.add("shop-now-btn");
    shopNowButton.textContent = "Shop Now";

    // WhatsApp link setup
    const whatsappNumber = "+919324696746"; // Replace with your WhatsApp number
    const productImageUrl = `${window.location.origin}/${product.imgFront}`;
    const message = `Hello, I am interested in buying this product:\n\nProduct: ${product.name}\nPrice: ${product.price}\n\nCheck the product image here: ${productImageUrl}`;
    
    // Encode the complete WhatsApp message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Set the href of the button to WhatsApp link
    shopNowButton.href = whatsappUrl;
    shopNowButton.target = "_blank"; // Open WhatsApp in new tab

    // Append product details to the content
    productContent.appendChild(productName);
    productContent.appendChild(productPrice);
    productContent.appendChild(shopNowButton);

    // Append image and content to the product box
    productBox.appendChild(productImage);
    productBox.appendChild(productContent);

    // Add the product box to the container
    productList.appendChild(productBox);
  });
}

// Call the function to render all products on page load
window.onload = () => {
  renderProducts(products);
};

// Filter function based on dropdown selection
function filterProducts() {
  const filterValue = document.getElementById('product-filter').value;

  if (filterValue === 'all') {
    renderProducts(products); // Show all products if filter is "all"
  } else {
    const filteredProducts = products.filter(product => product.category === filterValue);
    renderProducts(filteredProducts); // Display filtered products
  }
}

// Call the filterProducts function when filter is changed
document.getElementById('product-filter').addEventListener('change', filterProducts);

