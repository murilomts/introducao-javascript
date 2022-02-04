
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(e) {
    e.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacientedoForm(form);
    var error = validaPaciente(paciente);

    if (error.length > 0) {
        exibeMensagensErros(error);
        return;
    }
    
    addPacienteNaTabela(paciente);
    
    form.reset();
    var ulErro = document.querySelector("#mensagens-erro");
    ulErro.innerHTML = "";

});

function addPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensErros(error) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    error.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacientedoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if(paciente.nome.length == 0) 
        erros.push("O campo: Nome, não pode ser vazio.")

    if(paciente.gordura.length == 0 || paciente.gordura == " ") 
        erros.push("O campo: % de Gordura, não pode ser vazio.")

    if(!validaPeso(paciente.peso) || paciente.peso == "" || paciente.peso.length == 0) 
        erros.push("Peso inválido.")

    if(!validaAltura(paciente.altura) || paciente.altura == "" || paciente.altura.length == 0) 
        erros.push("Altura inválida!")

    return erros;
}
