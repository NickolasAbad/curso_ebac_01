$(document).ready(function() {

    const inputTarefa = $('#nome-tarefa')
    let tarefas = [];
    
        function adicionarTarefa() {

            const tarefa = inputTarefa.val()

        if(tarefas.includes(tarefa)) {
            alert(`A tarefa: ${tarefa} já foi adicionada anteriormente`)
        } else {
            tarefas.push(`${tarefa}`)
            $(`<li>${tarefa}</li>`).appendTo('ol')
            inputTarefa.val('')
        }
    
        }
    
        $('#botao-adicionar').click(function(e) {
            e.preventDefault();

            if(inputTarefa.val() === '') {
                alert(`Você precisa inserir uma tarefa`)
            } else {
                adicionarTarefa();
            }
    
        })
    
        $('#botao-clear').click(function(e) {
            $('ol').empty();
            tarefas = [];
        })
    
        
        $('ol').on('click', 'li', function() {

            $(this).css('text-decoration', 'line-through');

        })

})
