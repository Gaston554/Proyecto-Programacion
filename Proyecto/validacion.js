window.addEventListener('load', ()=> {
const form = document.getElementById('form')
const usuario = document.getElementById('usuario-form')
const email = document.getElementById('email')
const password = document.getElementById('pass')
const pass = document.getElementById('password-confirm')

form.addEventListener('click', (e)=>{
    e.preventDefault()
    validaCampos()
})

const validaCampos = ()=> {
    const usuarioValor = usuario.value
    const emailValor = email.value
    const passValor = pass.value
    const passwordValor = password.value

    if(!usuarioValor){
        console.log('CAMPO VACIO')
        validaFalla(usuario,"Campo vacio")
    }else{
        validaOk(usuario)
    }

    if(!emailValor){
        validaFalla(email,"Campo vacio")
    }else if(!validaEmail(emailValor)){
        validaFalla(email, "El email no es valido")
    }else {
        validaOk(email)
    }

    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/          
    if(!passValor) {
             validaFalla(pass, 'Campo vacío')
    } else if (passValor.length < 8) {             
             validaFalla(pass, 'Debe tener 8 caracteres cómo mínimo.')
    } else if (!passValor.match(er)) {
             validaFalla(pass, 'Debe tener al menos una may., una min. y un núm.')
    } else {
             validaOk(pass)
    }
    if(!passwordValor){
            validaFalla(password, 'Confirme su password')
    } else if(passValor !== passwordValor) {
            validaFalla(password, 'La password no coincide')
    } else {
            validaOk(password)
        }

    
}
const validaFalla = (input, msje) =>{
    const formControl = input.parentElement
    const aviso = formControl.querySelector("p")
    aviso.innerText = msje

    formControl.className = 'form-control falla'
}
const validaOk =(input, msje) =>{
    const formControl =input.parentElement
    formControl.className = 'form-control ok'
}
const validaEmail = (email)=>{
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);

}
})
