var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            const response = xhr.responseText;
            const pacientes = JSON.parse(response);
            
            pacientes.forEach(function(paciente) {
                addPacienteNaTabela(paciente);
            });
        
        } else {
            console.log("ERRO: " + xhr.status + ", " + xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    })

    xhr.send();

})