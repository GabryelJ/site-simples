'use strict'

const seletor = document.querySelector('.botao');

seletor.addEventListener('click', function(){
    document.body.classList.toggle('tema-escuro')

    var nomeDaClasse = document.body.className;
    if(nomeDaClasse == "tema-claro"){
        this.textContent = "Escuro";
    }else{
        this.textContent = "Claro";
    }
});
