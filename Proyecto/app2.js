window.addEventListener('load',()=>{
    const form = document.getElementById('form')
    const usuario = document.getElementById('usuario-form')
    const email = document.getElementById('email')
    const passwoord = document.getElementById('password-form')
    const pass = document.getElementById('password-confir')

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = ()=> {
        const usuarioValor = usuario.valor.trim()
        const emailValor = email.valor.trim()
        const passValor = pass.valor.trim()
        const passConfirmValor = passConfirm.valor.trim()

        if(usuarioValor === ''){
            console.log('campo vacio')
        }else{
            console.log('')
        }
    }
})