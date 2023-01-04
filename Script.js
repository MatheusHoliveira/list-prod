const products = [
  {
    id: "1",
    name: "Blusa Preta",
    Desc: "Preta",
    source:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: "R$ 72,00",
  },
  {
    id: "2",
    name: "Blusa Vermelha Feminia",
    Desc: "Vermelha",
    source:
      "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "R$ 85,00",
  },
  {
    id: "3",
    name: "Blusa Rosa",
    Desc: "Rosa",
    source:
      "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "R$ 80,00",
  },
  {
    id: "4",
    name: "Camisa Verde",
    Desc: "Verde",
    source:
      "https://images.unsplash.com/photo-1602700265157-953914742786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "R$ 93,00",
  },
  {
    id: "5",
    name: "Blusa de frio Laranja",
    Desc: "Laranja",
    source:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "R$ 337,00",
  },
  {
    id: "6",
    name: "Blusa Azul Estampada",
    Desc: "Azul",
    source:
      "https://images.unsplash.com/photo-1589902860314-e910697dea18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "R$ 120,00",
  },
];

const categoria = document.querySelector(".cat");
const showCategory = (findCategory) => {
  categoria.innerHTML = findCategory
    .map(
      (categoria) =>
        `
			  <div class="CatregryName">
				  
				  <span class="name">${categoria.Desc}</span>
			  </div>
		  `
    )
    .join("");
};
showCategory(products);

const product = document.querySelector(".products");
const showProducts = (findProducts) => {
  product.innerHTML = findProducts
    .map(
      (product) =>
        `
            <div class="product">
                <img src="${product.source}" alt="">
                <span class="name">${product.name}</span>
                <span class="name">${product.price}</span>
            </div>
        `
    )
    .join("");
};
showProducts(products);

const inputValue = document.querySelector(".input");
inputValue.addEventListener("keyup", (e) => {
  const filteredProducts = products.filter(
    (prod) => prod.name.toLowerCase().indexOf(e.target.value) !== -1
  );
  // console.log(filteredProducts);
  showProducts(filteredProducts);
});

const setCategories = () => {
  const allCats = products.map((item) => item.cat);
  const categories = [
    "Todas",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
		<span class="cat">${cat}</span>
	  `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "Todas"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};
setCategories();
