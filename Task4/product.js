const products = [
  {
    name: "Smartphone",
    category: "electronics",
    price: 299,
    rating: 4.5,
    image: "smartphone.jpg"
  },
  {
    name: "T-Shirt",
    category: "clothing",
    price: 25,
    rating: 4.0,
    image: "tshirt.jpg"
  },
  {
    name: "Novel",
    category: "books",
    price: 15,
    rating: 4.8,
    image: "novel.jpg"
  },
  {
    name: "Laptop",
    category: "electronics",
    price: 850,
    rating: 4.7,
    image: "laptop.jpg"
  },
  {
    name: "Jeans",
    category: "clothing",
    price: 40,
    rating: 4.2,
    image: "jeans.jpg"
  }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>Price: $${p.price}</p>
        <p>Rating: ⭐ ${p.rating}</p>
      </div>
    `;
  });
}

function filterAndSort() {
  let filtered = [...products];

  const category = categoryFilter.value;
  const sort = sortFilter.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "rating-desc") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortFilter.addEventListener("change", filterAndSort);

renderProducts(products);
