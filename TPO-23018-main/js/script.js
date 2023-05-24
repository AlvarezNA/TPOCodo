
// get products data

fetch("https://fakestoreapi.com/products/")
  .then((response) => response.json())
  .then((data) => {
    const products = data.filter(
      (product) => product.category === "electronics"
    );

    // Obtener el contenedor de los productos
    const productContainer = document.getElementById("product-container");

    // Construir el HTML para cada producto
    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("img");
      image.classList.add("img-card");
      image.src = product.image;
      image.alt = product.title;

      const description = document.createElement("p");
      description.classList.add("card-prod");
      description.textContent = product.title;

      const button = document.createElement("button");
      button.textContent = "Consultar";
      button.addEventListener("click", () => {
        // Aquí puedes definir la acción que deseas realizar al hacer clic en el botón
        location.href = "contacto.html";
      });

      card.appendChild(image);
      card.appendChild(description);
      card.appendChild(button);

      productContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });