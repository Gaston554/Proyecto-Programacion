const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10)
    header.classList.add("scroll")
    
    else{
        header.classList.remove("scroll")
    }

})

let carrito =[];
const btn = document.getElementsByClassName("btn")
const Informacion = document.getElementsByClassName("Informacion")
const productos = document.getElementById("Contenedor")
productos.forEach(product => {
    
    btn.addEventListener("click", (e) =>{
        carrito.push({
            
        })
    })  
});