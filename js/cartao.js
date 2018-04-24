(function() {

    // Como pega elementos?
    const cartoes = document.querySelectorAll('.cartao')
    // Como adicionar evento em todo mundo?
    for(let i = 0; i < cartoes.length; i++) {
        const cartao = cartoes[i]

        cartao.addEventListener('focusin', function () {
            // console.log('Focou')
            cartao.classList.add('cartao--focado')
        })

        cartao.addEventListener('focusout', function () {
            // console.log('Desfocou')
            cartao.classList.remove('cartao--focado')
        })

        cartao.addEventListener('change', function (evento) {
            // console.log('Infos do evento', evento)
            const elementoAlvo = event.target
            
            const isRadioTipo = elementoAlvo.classList.contains('opcoesDoCartao-radioTipo')

            if(isRadioTipo) {
                console.log('Disparou o change')
                // Pegando a cor nova
                const corNovaDoCartao = evento.target.value
                // Atribuindo a cor nova
                cartao.style.backgroundColor = corNovaDoCartao
            }
            // if(elementoAlvo.classList.contains('cartao-conteudo')) {
            //     console.log('Dentro do conteudo houve um click')
            // }
        })

        cartao.addEventListener('keypress', function(evento) {
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

        cartao.addEventListener('click', function (evento) {
            const elementoAlvo = evento.target
            const isBtnRemove = elementoAlvo.classList.contains('opcoesDoCartao-remove')
            // Quando clicar no remover
            if(isBtnRemove) {
                cartao.classList.add('cartao--some')
                cartao.addEventListener('transitionend', function () {
                    cartao.remove()
                })    
            } 

        }) 

    }

})()