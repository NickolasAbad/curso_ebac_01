$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(11) 12345-6789'
    })

    $('#CPF').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#CEP').mask('00000-000', {
        placeholder: '12345-678'
    })


    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CPF: {
                required: true
            },
            endereco: {
                required: true
            },
            CEP: {
                required: true
            },
        },
        messages: {
            nomeCompleto: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail',
            telefone: 'Por favor, insira o seu telefone',
            CPF: 'Por favor, insira o seu CPF',
            endereco: 'Por favor, insira o seu endereco',
            CEP: 'Por favor, insira o seu CEP',
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

})