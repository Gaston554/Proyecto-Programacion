const shopContent = document.getElementById("contenedor");
const verCarrito =document.getElementById("carrito");
const modalContainer =document.getElementById("modal-container");
const cantidadCarrito =document.getElementById("cantidadCarrito");

const productos = [
    {
        id: 1,
        nombre: "Ark survival",
        precio: 900,
        img: "./img/ark.jpg",
        cantidad: 1,

    },
    {
        id: 2,
        nombre: "Valorant",
        precio: 524,
        img: "./img/valorant.jpg",
        cantidad: 1,

    },
    {
        id: 3,
        nombre: "Rocket League",
        precio: 430,
        img: "./img/rocker.jpg",
        cantidad: 1,

    },
    {
        id: 4,
        nombre: "DOOM",
        precio: 131,
        img: "./img/doom.png",
        cantidad: 1,

    },
    {
        id: 5,
        nombre: "Genshi Impact",
        precio: 242,
        img: "./img/genshin.jpg",
        cantidad: 1,

    },
    {
        id: 6,
        nombre: "Fifa 22",
        precio: 500,
        img: "./img/fifa.jpg",
        cantidad: 1,

    },
    {
        id: 7,
        nombre: "Grand Theft Auto V",
        precio: 120,
        img: "./img/gta.jpg",
        cantidad: 1,

    },
    {
        id: 8,
        nombre: "God of War",
        precio: 100,
        img: "./img/god.jpg",
        cantidad: 1,

    },
    {
        id: 9,
        nombre: "Crash Bandicoot",
        precio: 150,
        img: "./img/crash.png",
        cantidad: 1,

    },
    {
        id: 10,
        nombre: "Fall Guys",
        precio: 400,
        img: "./img/fall.jpg",
        cantidad: 1,

    },
    {
        id: 11,
        nombre: "Need for Speed MostWanter",
        precio: 250,
        img: "./img/need.jpg",
        cantidad: 1,
    },
    {
        id: 12,
        nombre: "Need for Speed: Heat",
        precio: 200,
        img: "./img/car.jpg",
        cantidad: 1,

    },
];



//creacion de las cartas en donde estara el precio, el nombre y una imagen el producto.
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
productos.forEach(product => { // ejecuta la función indicada una vez por cada elemento del array.

    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3 class="h3Nombre">${product.nombre}</h3>
    <p class="price">${product.precio}$ </p>
    `
    shopContent.append(content); // se encarga de agregar contenido al final del ya existente
   
    let comprar = document.createElement("button")
    comprar.innerText ="comprar";
    comprar.className = "comprar";


    content.append(comprar);

    comprar.addEventListener("click", () =>{

        //
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);  //El some ejecuta la funcion por cada elemento presente en la array hasta que encuentre uno donde retorna un valor verdadero.
        
        // El repeat construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada
        if(repeat){
            carrito.map((prod) =>{ // Map crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
                
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        } else{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        }   
        carritoContent();
        saveLocal();
    });
});

//El localStorage hace que se guarden los datos que son seleccionados por el usuario.
const saveLocal = () =>{
    localStorage.setItem("carrito",JSON.stringify(carrito));

};


const pintarCarrito = () => {
    modalContainer.innerHTML = "";
        modalContainer.style.display = "flex"
        const modalheader = document.createElement("div");
        modalheader.className = "modal-header"
        modalheader.innerHTML = `
        <h1 class="modal-header-title">"Carrito"</h1>
        `;
        modalContainer.append(modalheader);
        const modalbutton = document.createElement("h1");
        modalbutton.innerText ="❌";
        modalbutton.className = "modal-header-button";
    
        modalbutton.addEventListener("click",() =>{
            modalContainer.style.display = "none";
    
        });
    
    
    
        modalheader.append(modalbutton);
        carrito.forEach((product) =>{
            let carritoContent = document.createElement("div");
            carritoContent.className = "modal-content";
            carritoContent.innerHTML =`
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
             <p>${product.precio}$</p>
            `;
            modalContainer.append(carritoContent);
    
            let eliminar = document.createElement("span");
            eliminar.innerText = "❌";
            eliminar.className = "delete-product";
            carritoContent.append(eliminar);
    
            eliminar.addEventListener("click", eliminarProducto);
        });
    
        const total = carrito.reduce((acc,el) => acc + el.precio, 0 ); //ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
    
        const totalBuying = document.createElement("div");
        totalBuying.className = "total-content";
        totalBuying.innerHTML = `total a pagar: ${total}$`;
        modalContainer.append(totalBuying);
    };

    verCarrito.addEventListener("click", pintarCarrito);
    
    const eliminarProducto = () => {
        const foundId = carrito.find((Element) => Element.id);
        
        carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
        });
        carritoContent();
        saveLocal();
        pintarCarrito();

    };

    const carritoContent = () =>{
        cantidadCarrito.style.display ="block";

        const carritoLength = carrito.length;

        localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

        cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

    };
carritoContent();