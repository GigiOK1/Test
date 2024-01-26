const products = [
  {
    name: "Salad 1",
    price: "$9.99",
    Img: "salad1.jpg",
    filter: "Salad",
  },
  {
    name: "Salad 2",
    price: "$9.99",
    Img: "salad2.jpg",
    filter: "Salad",
  },
  {
    name: "Salad 3",
    price: "$9.99",
    Img: "salad3.jpg",
    filter: "Salad",
  },
  {
    name: "Steak 1",
    price: "$14.99",
    Img: "Steak 1.jpg",
    filter: "Steak",
  },
  {
    name: "Steak 2",
    price: "$14.99",
    Img: "Steak 2.jpg",
    filter: "Steak",
  },
  {
    name: "Steak 3",
    price: "$14.99",
    Img: "Steak 3.jpg",
    filter: "Steak",
  },
  {
    name: "Fries",
    price: "$2.99",
    Img: "Fries.jpg",
    filter: "Fries",
  },
  {
    name: "Dessert",
    price: "$9.99",
    Img: "Desert.jpg",
    filter: "dessert",
  },
  {
    name: "Burger 1",
    price: "$15.99",
    Img: "Burger 1.jpg",
    filter: "burger",
  },
  {
    name: "Burger 2",
    price: "$13.99",
    Img: "Burger 2.jpg",
    filter: "burger",
  },
];

let container = document.querySelector(".container");

for (let item of products) {
  let raghaca = document.createElement("div");

  raghaca.innerHTML = `
    <img src="${item.Img}">
    <p>${item.name}</p>
    <p>${item.price}</p>
  `;
  container.appendChild(raghaca);
}

//--------------------------------- functions
//general filter
function filter(str) {
  container.innerHTML = "";

  let filteredProds = products.filter(
    (product) =>
      product.name.toLowerCase().slice(0, str.length) == str.toLowerCase()
  );

  for (let item of filteredProds) {
    let raghaca = document.createElement("div");

    raghaca.innerHTML = `
          <img src="${item.Img}">
          <p>${item.name}</p>
          <p>${item.price}</p>
        `;
    container.appendChild(raghaca);
  }
  // ALL FILTER
}
function filterALL() {
  container.innerHTML = "";

  for (let item of products) {
    let raghaca = document.createElement("div");

    raghaca.innerHTML = `
          <img src="${item.Img}">
          <p>${item.name}</p>
          <p>${item.price}</p>
        `;
    container.appendChild(raghaca);
  }
}
//filter salads

function filterSalads() {
  container.innerHTML = "";

  let filteredProds = products.filter((product) => product.filter == "Salad");
  console.log("filtered");

  for (let item of filteredProds) {
    let raghaca = document.createElement("div");

    raghaca.innerHTML = `
          <img src="${item.Img}">
          <p>${item.name}</p>
          <p>${item.price}</p>
        `;
    container.appendChild(raghaca);
  }
}
// filter steaks

function filterSteaks() {
  container.innerHTML = "";

  let filteredProds = products.filter((product) => product.filter == "Steak");
  console.log("filtered");

  for (let item of filteredProds) {
    let raghaca = document.createElement("div");

    raghaca.innerHTML = `
          <img src="${item.Img}">
          <p>${item.name}</p>
          <p>${item.price}</p>
        `;
    container.appendChild(raghaca);
  }
}
//filter Side-meal

function filterSM() {
  container.innerHTML = "";

  let filteredProds = products.filter((product) => product.filter == "Fries");
  console.log("filtered");

  for (let item of filteredProds) {
    let raghaca = document.createElement("div");

    raghaca.innerHTML = `
          <img src="${item.Img}">
          <p>${item.name}</p>
          <p>${item.price}</p>
        `;
    container.appendChild(raghaca);
  }
}
//filter desserts

function filterDesserts() {
  container.innerHTML = "";

  let filteredProds = products.filter((product) => product.filter == "dessert");
  console.log("filtered");

  for (let item of filteredProds) {
    let raghaca = document.createElement("div");

    raghaca.innerHTML = `
          <img src="${item.Img}">
          <p>${item.name}</p>
          <p>${item.price}</p>
        `;
    container.appendChild(raghaca);
  }
}
// filter burgers

function filterBurgers() {
  container.innerHTML = "";

  let filteredProds = products.filter((product) => product.filter == "burger");
  console.log("filtered");

  for (let item of filteredProds) {
    let raghaca = document.createElement("div");

    raghaca.innerHTML = `
          <img src="${item.Img}">
          <p>${item.name}</p>
          <p>${item.price}</p>
        `;
    container.appendChild(raghaca);
  }
}
