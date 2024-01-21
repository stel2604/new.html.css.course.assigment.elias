// Funksjon for å hente og vise produktinformasjon basert på produktets ID
function fetchProductDetails(productId) {
    // Bruk JavaScript fetch for å sende en GET-forespørsel til API-en
    fetch(`https://api.noroff.dev/api/v1/products/${productId}`)
      .then((response) => response.json())
      .then((productData) => {
        // Nå har du produktinformasjonen i productData-objektet
        // Oppdater HTML-elementene med produktinformasjonen
        document.getElementById("product-image").src = productData.image;
        document.getElementById("product-title").textContent = productData.title;
        document.getElementById("product-price").textContent = `Price: $${productData.price}`;
        document.getElementById("product-description").textContent = productData.description;
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }
  
  // Når siden lastes, kan du hente produktinformasjon basert på produktets ID
  document.addEventListener("DOMContentLoaded", () => {
    // Sett produktets ID basert på det du trenger, for eksempel fra URL-parameteren
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
  
    // Sjekk om productId er gyldig før du henter produktinformasjon
    if (productId) {
      fetchProductDetails(productId);
    } else {
      console.error("Product ID is missing in URL.");
    }
  });
