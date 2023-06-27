import Product from "./product";

const form = document.getElementById("form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameInput = (<HTMLInputElement>(
    document.getElementById("product-name")
  ))

  let priceInput = (<HTMLInputElement>(
    document.getElementById("product-price")
  ))

  const name: string = nameInput.value;

  const price: number = +priceInput.value;

  if (name !== '' && price !== 0) {
    const product = new Product(name, price);

    const table = document.getElementById("table");

    table?.insertAdjacentHTML(
      "beforeend",
      `
    <tr>
        <td>${product.id}</id>
        <td>${product.name}</id>
        <td>${product.price}</id>
    </tr>
  `
    );

    nameInput.value = '';
    priceInput.value = '';
  } else {
    alert('maydonlarni to`ldiring')
  }
});
