;(function() {

// Pega o elemento
const form = document.querySelector('.formNovoCartao')

form.addEventListener('submit', function(evento) {
    evento.preventDefault()

    const campoConteudo = document.querySelector('.formNovoCartao-conteudo')
    const conteudo = campoConteudo.value

    const isTextAreaVazio = conteudo.trim().length === 0

    if(isTextAreaVazio) {
        // Valida de alguma forma
        // <div class="formNovoCartao-msg">Não digite varios nada</div>
        // Imperativo (dando ordens)
        const msgErro = document.createElement('div')
        msgErro.textContent = 'Não digite vários nada'
        msgErro.classList.add('formNovoCartao-msg')


        form.querySelector('.formNovoCartao-salvar')
                .insertAdjacentElement('beforebegin', msgErro)

        msgErro.addEventListener('animationend', function() {
            msgErro.remove()
        })

    } else {
        adicionaCartao({ conteudo: conteudo })

        campoConteudo.value = ''            
    }

})


// Ativou o Progressive Enhancement
form.classList.remove('no-js')

})()