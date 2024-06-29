document.addEventListener('DOMContentLoaded', () => {
  const products = [
    {
      thumbnail : "images/1.jpg",
      id: 1,
      name: 'Product 1',
      price: 10.00
    },
    {
      thumbnail : "images/2.webp",
      id: 2,
      name: 'Product 2',
      price: 20.00
    },
    {
      thumbnail : "images/3.jpeg",
      id: 3,
      name: 'Product 3',
      price: 30.00
    },
    {
      thumbnail : "images/4.webp",
      id: 4,
      name: 'Product 4',
      price: 40.00
    },
    {
      thumbnail : "images/5.jpg",
      id: 5,
      name: 'Product 5',
      price: 50.00
    },
    {
      thumbnail :"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      id: 6,
      name: 'Product 6',
      price: 60.00
    },
    {
      thumbnail: "images/7.webp",
      id: 7,
      name: 'Product 7',
      price: 70.00
    },
    {
      thumbnail: "images/8.jpg",
      id: 8,
      name: 'Product 8',
      price: 80.00
    },
    {
      thumbnail: "images/9.jpg",
      id: 9,
      name: 'Product 9',
      price: 90.00
    },
    {
      thumbnail: "images/10.webp",
      id: 10,
      name: 'Product 10',
      price: 100.00
    },
    {
      thumbnail: "images/11.png",
      id: 11,
      name: 'Product 11',
      price: 110.00
    },

    {
      thumbnail: "images/12.jpeg",
      id: 12,
      name: 'Product 12',
      price: 120.00
    },
    {
      thumbnail: "images/13.jpg",
      id: 13,
      name: 'Product 13',
      price: 130.00
    },
    {
      thumbnail: "images/14.webp",
      id: 14,
      name: 'Product 14',
      price: 140.00
    },
    {
      thumbnail: "images/15.jpeg",
      id: 15,
      name: 'Product 15',
      price: 150.00
    },
    {
      thumbnail: "images/16.jpg",
      id: 16,
      name: 'Product 16',
      price: 160.00
    },
  ];

  const viewCart = document.getElementById('viewCart');
  const cartCount = document.getElementById('cart-count');

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.reduce((count, item) => count + item.quantity, 0);
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  };

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'col-12 col-md-6 col-lg-3 mb-4 pt-5 mx-auto';
    productElement.innerHTML = `
          <div class="card  m-2" style="width: 18rem;">
          <img src="${product.thumbnail}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">Price: $${product.price.toFixed(2)}</p>
                  <button class="btn btn-primary add-to-cart">Add to Cart</button>
              </div>
          </div>
      `;
    productElement.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));
    viewCart.appendChild(productElement);
  });

  updateCartCount();
});
