const shopContent = document.getElementById("contenedor");
const verCarrito =document.getElementById("carrito");
const modalContainer =document.getElementById("modal-container");
const cantidadCarrito =document.getElementById("cantidadCarrito");

const productos = [
    {
        id: 1,
        nombre: "Ark survival",
        precio: "900",
        img: "",
        cantidad: 1,

    },
    {
        id: 2,
        nombre: "Valorant",
        precio: "524",
        img: "",
        cantidad: 1,

    },
    {
        id: 3,
        nombre: "Rocket League",
        precio: "431",
        img: "",
        cantidad: 1,

    },
    {
        id: 4,
        nombre: "DOOM slayer",
        precio: "131",
        img: "",
        cantidad: 1,

    },
    {
        id: 5,
        nombre: "Genshi Impact",
        precio: "242",
        img: "",
        cantidad: 1,

    },
    {
        id: 6,
        nombre: "Fifa 22",
        precio: "500",
        img: "",
        cantidad: 1,

    },
    {
        id: 7,
        nombre: "Grand Theft Auto V",
        precio: "120",
        img: "",
        cantidad: 1,

    },
    {
        id: 8,
        nombre: "God of War",
        precio: "100",
        img: "",
        cantidad: 1,

    },
    {
        id: 9,
        nombre: "Crash Bandicoot",
        precio: "150",
        img: "",
        cantidad: 1,

    },
    {
        id: 10,
        nombre: "Fall Guys",
        precio: "400",
        img: "",
        cantidad: 1,

    },
    {
        id: 11,
        nombre: "Need for Speed MostWanter",
        precio: "250",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhdqwalls.com%2Fneed-for-speed-most-wanted-key-art-5k-wallpaper&psig=AOvVaw2EpGUDjAllMnaHZCfSN-jr&ust=1668210954502000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDLn53opPsCFQAAAAAdAAAAABBB",
        cantidad: 1,
    },
    {
        id: 12,
        nombre: "Need for Speed: Heat",
        precio: "200",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwall.alphacoders.com%2Fby_sub_category.php%3Fid%3D318337%26name%3DNeed%2Bfor%2BSpeed%2BHeat%2BFondos%2Bde%2Bpantalla%26lang%3DSpanish&psig=AOvVaw0f6d4WDG_tQU4MXB9udA_u&ust=1668210893554000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjki__npPsCFQAAAAAdAAAAABAD",
        cantidad: 1,

    },
];


let carrito = [];
productos.forEach(product => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio}$ </p>
    `
    shopContent.append(content);
    let comprar = document.createElement("button")
    comprar.innerText ="comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if(repeat){
            carrito.map((prod) =>{
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
            cantidad:product.cantidad,
        });
        }   
        carritoContent();
    });
});


const pintarCarrito = () => {
    modalContainer.innerHTML = "";
        modalContainer.style.display = "flex"
        const modalheader = document.createElement("div");
        modalheader.className = "modal-header"
        modalheader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
        `;
        modalContainer.append(modalheader);
        const modalbutton = document.createElement("h1");
        modalbutton.innerText ="x";
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
             <p>cantidad:${product.cantidad}</p>
            `;
            modalContainer.append(carritoContent);
    
            let eliminar = document.createElement("span");
            eliminar.innerText = "❌";
            eliminar.className = "delete-product";
            carritoContent.append(eliminar);
    
            eliminar.addEventListener("click", eliminarProducto);
        });
    
        const total = carrito.reduce((acc,el) => acc + el.precio, 0 );
    
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
        
        pintarCarrito();
    };

    const carritoContent = () =>{
        cantidadCarrito.style.display ="block";
            cantidadCarrito.innerText = carrito.length;
    };
