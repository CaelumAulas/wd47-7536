const btn = document.querySelector('#btnMudaLayout')
// onclick=""
// btn.onclick = mudaTexto; mudaLayout 
btn.addEventListener('click', mudaTexto)

function mudaTexto() {
    if(btn.textContent == 'Blocos'){
        btn.textContent = 'Linhas'
    } else {
        btn.textContent = 'Blocos'
    }
}

// mural--linhas
const mural = document.querySelector('.mural')
btn.addEventListener('click', mudaLayout)

// Hoisting / Içar
function mudaLayout() {
    // if(mural.classList.contains('mural--linha')) {
    //     mural.classList.remove('mural--linha')    
    // } else {
    //     mural.classList.add('mural--linha')
    // }
    mural.classList.toggle('mural--linha')
}


btn.classList.remove('no-js')