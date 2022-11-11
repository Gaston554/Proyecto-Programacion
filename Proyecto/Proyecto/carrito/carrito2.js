const pintarCarrito = ()=> {
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
    const foundId = carrito.find((Element)=> Element.id);

    carrito = carrito.filter((carritoId) =>{
    return carritoId !== foundId;
    });
};
    

