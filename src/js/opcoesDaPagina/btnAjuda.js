// IIFE
;(function() {
    const btnAjuda = document.querySelector('#btnAjuda')

    btnAjuda.addEventListener('click', function() {
        const listaDeMsgs = [
            { conteudo: 'Bien venido \o/', cor: 'red' },
            { conteudo: 'Você pode criar cartões', cor: 'purple' },
            { conteudo: 'Brinque de restart', cor: 'orange' },
            { conteudo: 'Deseja bloquart os popups?', cor: 'cyan' },
        ]

        listaDeMsgs.forEach(function(mensagemObjeto) {
            adicionaCartao(mensagemObjeto)
        })

        // function forEach(funcao) {
        //     // seuArray 
        //     for( let item of seuArray) {
        //         funcao(item)
        //     }
        // }

        // for(let mensagem of listaDeMsgs) {
        //     alert(mensagem)
        // }
    })

    btnAjuda.classList.remove('no-js')
})()