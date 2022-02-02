var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        //target é o alvo que foi clicado
        //parentNode ele captura o pai do alvo (o que foi clicado)
        event.target.parentNode.remove();
    }, 500);
});
