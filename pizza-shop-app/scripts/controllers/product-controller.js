//glue between view and model
//perform i/o with UI

import productOperation from "../services/product-operation.js";

async function loadPizzas() {
  const pizzas = await productOperation.loadProducts();
  console.log("pizzas are", pizzas);
  for (let pizza of pizzas)
    preparePizza(pizza);
}
loadPizzas();

function addToCart() {
  console.log("i am adding");
  const pizzaId = this.getAttribute("pizza-id");
  console.log("id-", pizzaId);
  productOperation.search(pizzaId);
  printBasket();
}

function printBasket() {
  const printPizza = productOperation.getBasket();
  const basket = document.querySelector("#basket");
  let totalsum = printPizza.reduce((sum, e) => sum + parseFloat(e.price), 0);
  basket.innerHTML = "";
  console.log("price is", totalsum);

  for (const pizza of printPizza) {

    const li = document.createElement("li");
    li.innerText = `${pizza.id} ${pizza.name} ${pizza.price}`;
    basket.appendChild(li);
  }

  const p = document.createElement("p");
  p.innerText = `total price is ${totalsum}`;
  basket.appendChild(p);

}




/*
<div class="col-4">
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
*/
//above static card converted into dynamic dom tree
function preparePizza(pizza) {
  const outputDiv = document.querySelector("#output");
  const colDiv = document.createElement("div");
  colDiv.className = "col-4";
  const cardDiv = document.createElement("div");
  cardDiv.style = "width: 18rem;";
  cardDiv.className = "card";
  colDiv.appendChild(cardDiv);
  const img = document.createElement("img");
  img.src = pizza.url;
  img.className = "card-img-top";
  cardDiv.appendChild(img);
  const bodyDiv = document.createElement("div");
  bodyDiv.className = "card-body";
  cardDiv.appendChild(bodyDiv);
  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = pizza.name;
  const pTag = document.createElement("p");
  pTag.className = "card-Text";
  pTag.innerText = pizza.desc;
  const button = document.createElement("button");
  button.className = "btn btn-primary";
  button.innerText = "Add to cart";
  button.setAttribute("pizza-id", pizza.id);

  button.addEventListener("click", addToCart);
  bodyDiv.appendChild(h5);
  bodyDiv.appendChild(pTag);
  bodyDiv.appendChild(button);
  outputDiv.appendChild(colDiv);

}