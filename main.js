Pizzas = [
    {
        id: 1,
        nombre: "Doble Muzza",
        ingredientes: ["salsa de tomate", "Doble queso", "aceitunas verdes", "morrones"],
        precio: 1000,
        img:"pizza1.jpg",
    },
    {
        id: 2,
        nombre: "Panceta y Puerro",
        ingredientes: ["salsa de tomate", "queso", "panceta", "puerro"],
        precio: 1300,
        img:"pizza2.jpg",
    },
    {
        id: 3,
        nombre: "Clasica",
        ingredientes: ["salsa de tomate", "queso", "jamón", "aceitunas"],
        precio: 300,
        img:"pizza3.jpg",
    },
    {
        id: 4,
        nombre: "Champi",
        ingredientes: ["Queso", " Champiñones"],
        precio: 1000,
        img:"pizza4.jpg",
    },
    {
        id: 5,
        nombre: "Tomatada",
        ingredientes: [" salsa de tomate"],
        precio: 500,
        img:"pizza5.jpg",
    },
    {
        id: 6,
        nombre: "Rucula",
        ingredientes: [" salsa de tomate", " muzzarela", " hebras de queso parmesano", "rúcula"],
        precio: 1000,
        img:"pizza6.jpg",
    },
    {
        id: 7,
        nombre: "Anchoas",
        ingredientes: ["queso", "anchoras", "aceitunas negras"],
        precio: 1300,
        img:"pizza7.jpg",
    },
    {
        id: 8,
        nombre: "Napolitana",
        ingredientes: ["queso", "tomates", "albahaca"],
        precio: 1000,
        img:"pizza8.jpg",
    },
    {
        id: 9,
        nombre: "Provensal",
        ingredientes: ["queso", "ajo", "perejil fresco", "aceitunas verdes"],
        precio: 1200,
        img:"pizza9.jpg",
    }
]
const formu = document.getElementById("formulario");
const selectorPizzas = document.getElementById("selectorPizza");
const agregarBtn = document.getElementById("idButton");
const agregarListado = document.getElementById("mostarSeleccion");

const findPizzas = (value) => Pizzas.find(pizza => pizza.id === value)


const showEmptyError = () => {
    agregarListado.innerHTML = `
    <div class="cardPizzaError">
        <h2 class="error-title">No a ingresado ningun numero</h2>
        
    </div>`
}
const renderResult = (pizza) => {
    if(!pizza){
        agregarListado.innerHTML = `
        <div class="cardPizzaError">
        <h2 class="error-title">No se encontro una pizza con el numero ingresado</h2>
    </div>`
    }else{
        agregarListado.innerHTML = `
        <div class="cardPizzaOk">
        <h4 class="pizza-ingredientes">Numero: ${pizza.id}</h4>
            <h2 class="pizza-title">${pizza.nombre}</h2>
            <h3 class="pizza-price">$${pizza.precio}</h3>
            
            <h4 class="pizza-ingredientes">${pizza.ingredientes}</h4>
            <div class="pizzaImg" style='background-image: url("img/${pizza.img}");'></div>
        </div>`;
        
    }
}
const getLast = () =>{
    pizzaListado = JSON.parse(localStorage.getItem("pizza"))||[]
    pizzaListado=[...pizzaListado]
    pizzaListado = pizzaListado[pizzaListado.length]
    return pizzaListado;
    
}

const saveLocalStorage = (pizza ) =>{ 
    localStorage.setItem("pizza", JSON.stringify(pizza))
}
const render = (pizza) =>{
    if(pizza<pizza.len){
        gregarListado.innerHTML = `
        <div class="cardPizzaOk">
        <h4 class="pizza-ingredientes">Numero: ${pizza.id}</h4>
            <h2 class="pizza-title">${pizza.nombre}</h2>
            <h3 class="pizza-price">$${pizza.precio}</h3>
            
            <h4 class="pizza-ingredientes">${pizza.ingredientes}</h4>
            <div class="pizzaImg" style='background-image: url("img/${pizza.img}");'></div>

        </div>`;
    }else{
        agregarListado.innerHTML = `
        <div class="cardPizzaError">
        <h2 class="error-title">No se encontro una pizza con el numero ingresado</h2>
    </div>`
    }
}
const searchPizza = (e) => {
    e.preventDefault();
    const numeroValue = selectorPizzas.value;
    if (!numeroValue) {
        showEmptyError();
        return;
    }
    const searchedPizza= findPizzas(Number(numeroValue));
    saveLocalStorage(searchedPizza);
    renderResult(searchedPizza);
    numeroValue.value="";
    formu.reset();
};

const init = () => {
    const ultima = JSON.parse( localStorage.getItem("pizza"));
    renderResult(ultima) 
    formu.addEventListener("submit", searchPizza);
    
};
init();
