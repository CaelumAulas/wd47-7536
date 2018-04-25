;(function() {
    

let numeroDeCartoes = $('.cartao').length;

// Destructuring - ES6
function adicionaCartao({ conteudo, cor }) {
    numeroDeCartoes++
    console.log(numeroDeCartoes)
    // const conteudo = carataoObj.conteudo
    // const cor = carataoObj.cor
    
    const cartao = $(`
    <article id="cartao_${numeroDeCartoes}" class="cartao" tabindex="0" style="background-color: ${cor};">
        <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>

            <input type="radio" name="corDoCartao${numeroDeCartoes}" value="#EBEF40" id="corPadrão-cartao${numeroDeCartoes}" class="opcoesDoCartao-radioTipo" checked="">
            <label for="corPadrão-cartao${numeroDeCartoes}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
            </label>

            <input type="radio" name="corDoCartao${numeroDeCartoes}" value="#F05450" id="corImportante-cartao${numeroDeCartoes}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numeroDeCartoes}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
            </label>

            <input type="radio" name="corDoCartao${numeroDeCartoes}" value="#92C4EC" id="corTarefa-cartao${numeroDeCartoes}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numeroDeCartoes}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
            </label>

            <input type="radio" name="corDoCartao${numeroDeCartoes}" value="#76EF40" id="corInspiração-cartao${numeroDeCartoes}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numeroDeCartoes}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
            </label>
        </div>
        <p class="cartao-conteudo" contenteditable="" tabindex="0">${conteudo}</p>
    </article>
    `)

    // const cartao = templateCartao.querySelector('.cartao')
    console.log(cartao)
    cartao.on('focusin', function () {
        // console.log('Focou')
        cartao.addClass('cartao--focado')
    })

    cartao.on('focusout', function () {
        // console.log('Desfocou')
        cartao.removeClass('cartao--focado')
    })

    cartao.on('change', function (evento) {
        // console.log('Infos do evento', evento)
        const elementoAlvo = event.target
        
        const isRadioTipo = elementoAlvo.classList.contains('opcoesDoCartao-radioTipo')

        if(isRadioTipo) {
            console.log('Disparou o change')
            // Pegando a cor nova
            const corNovaDoCartao = evento.target.value
            // Atribuindo a cor nova
            cartao.css('background', corNovaDoCartao)
        }
        // if(elementoAlvo.classList.contains('cartao-conteudo')) {
        //     console.log('Dentro do conteudo houve um click')
        // }
    })

    cartao.on('keypress', function(evento) {
        // opcoesDoCartao-tipo
        const isOpcoesDoCartaoTipo = event.target.classList.contains('opcoesDoCartao-tipo')
        
        if(isOpcoesDoCartaoTipo) {
            // console.log('Ta funfano?', event.target) 
            // Lógica do Click
            if(evento.key === " " || evento.key === "Enter") {
                console.log('Forcou o click')
                event.target.click()
            }
        }
    })

    cartao.on('click', function (evento) {
        const elementoAlvo = evento.target
        const isBtnRemove = elementoAlvo.classList.contains('opcoesDoCartao-remove')
        // Quando clicar no remover
        if(isBtnRemove) {
            cartao.addClass('cartao--some')
            cartao.on('transitionend', function () {
                cartao.remove()
            })    
        } 

    }) 
    
    $('.mural').prepend(cartao)
}

window.adicionaCartao = adicionaCartao
window.mural = {
    adicionaCartao: adicionaCartao
}


})()
