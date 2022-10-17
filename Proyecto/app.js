const formulario = document.getElementById("form")
formulario.addEventListener('submit', function(e){
    
    e.preventDefault();
    let user = document.getElementById("usuario-form").value
    console.log(user)
})