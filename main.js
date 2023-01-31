const form = document.getElementById('calc');
const blocoA = document.getElementById('bloco-a');
const blocoB = document.getElementById('bloco-b');
let valor1 = false

function validaValor(valor) {
    if(isNaN(blocoA.value)) {
        blocoA.value = 0;
    }
    const resultado = valor > blocoA.value
    console.log(resultado)
    return resultado
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    valor1 = validaValor(blocoB.value)
    if (valor1 === false) {
        blocoB.style.border = '1px solid red'
        blocoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        const mensagemSucesso = `O numero: <b>${blocoB.value}</b> é maior que: <b>${blocoA.value}</b>`
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        blocoA.value = '';
        blocoB.value = '';
        blocoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
        document.getElementById('bloco-b').style = ''
    }
})