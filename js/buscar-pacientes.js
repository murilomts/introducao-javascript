var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        const response = xhr.responseText;
        const pacientes = JSON.parse(response);
        
        pacientes.forEach( function(paciente) {
            addPacienteNaTabela(paciente);
        });
    })
    
    xhr.send();
})