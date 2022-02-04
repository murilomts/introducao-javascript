var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        for (let i=0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            const tdNome = paciente.querySelector(".info-nome");
            const nome = tdNome.textContent;
            //expressao para buscar por cada caracter, o 'i' significa case insensitive
            const expressao = new RegExp(this.value, "i")
            
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});