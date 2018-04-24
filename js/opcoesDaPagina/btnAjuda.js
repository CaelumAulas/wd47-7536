// IIFE
;(function() {
    const btnAjuda = document.querySelector('#btnAjuda')

    btnAjuda.addEventListener('click', function() {
        const listaDeMsgs = [
            'Bien venido \o/',
            'Você pode criar cartões',
            'Brinque de restart',
            'Deseja bloquart os popups?'
        ]

        listaDeMsgs.forEach(function(mensagem) {
            alert(mensagem)
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