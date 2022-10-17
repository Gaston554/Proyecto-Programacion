
const form = document.getElementById('form')
const usuario = document.getElementById('usuario-form')
const email = document.getElementById('email')
const password = document.getElementById('password-form')
const pass = document.getElementById('password-confirm')

form.addEventListener('click', (e)=>{
    e.preventDefault()
    validaCampos()
})

const validaCampos = ()=> {
    const usuarioValor = usuario.value
    const emailValor = email.value
    const passValor = pass.value
    const passConfirmValor = pass.value

    if(usuarioValor === ''){
        console.log('campo vacio')
        validaFalla(usuario,"Campo vacio")
    }else{
        validaOk(usuario)
        //console.log(usuarioValor)
    }
    const validaFalla = (input,msje) =>{
        const formControl = input.parentElement
        const aviso = formControl.querySelector("p")
        aviso.innerText = msje
    }
    const validaOk =(input, msje) =>{

    }
}
