// Funksjon for å hente produktlisten fra API
function fetchProductList() {
    // Bruk JavaScript fetch for å sende en GET-forespørsel til API-en for å hente produktlisten
    fetch("https://api.noroff.dev/api/v1/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((productList) => {
        // Nå har du en liste over produkter i productList-objektet
        // Oppdater HTML-elementene for å vise produktene på produktsiden
  
        const productsContainer = document.getElementById("products-container");
  
        productList.forEach((product) => {
          const productCard = document.createElement("div");
          productCard.classList.add("product-card");
  
          const productImage = document.createElement("img");
          productImage.src = product.image;
          productImage.alt = product.title;
  
          const productTitle = document.createElement("h2");
          productTitle.textContent = product.title;
  
          const productPrice = document.createElement("div");
          productPrice.classList.add("price");
          productPrice.textContent = `Price: $${product.price}`;
  
          productCard.appendChild(productImage);
          productCard.appendChild(productTitle);
          productCard.appendChild(productPrice);
  
          productsContainer.appendChild(productCard);
        });
      })
      .catch((error) => {
        console.error("Error fetching product list:", error);
      });
  }
  
  // Når siden lastes, kan du hente produktlisten fra API
  document.addEventListener("DOMContentLoaded", () => {
    fetchProductList();
  });
  